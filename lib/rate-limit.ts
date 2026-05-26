type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  ok: boolean;
  retryAfterSeconds: number;
};

type RateLimitStore = Map<string, RateLimitEntry>;

const RATE_LIMIT_STORE_KEY = "__giRateLimitStore__";

function getStore(): RateLimitStore {
  const globalWithStore = globalThis as typeof globalThis & {
    [RATE_LIMIT_STORE_KEY]?: RateLimitStore;
  };

  if (!globalWithStore[RATE_LIMIT_STORE_KEY]) {
    globalWithStore[RATE_LIMIT_STORE_KEY] = new Map<string, RateLimitEntry>();
  }

  return globalWithStore[RATE_LIMIT_STORE_KEY];
}

export function enforceRateLimit(input: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitResult {
  const now = Date.now();
  const store = getStore();
  const current = store.get(input.key);

  if (!current || current.resetAt <= now) {
    store.set(input.key, { count: 1, resetAt: now + input.windowMs });
    return { ok: true, retryAfterSeconds: 0 };
  }

  if (current.count >= input.limit) {
    return {
      ok: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000))
    };
  }

  current.count += 1;
  store.set(input.key, current);

  return { ok: true, retryAfterSeconds: 0 };
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  return request.headers.get("cf-connecting-ip") ?? "unknown";
}
