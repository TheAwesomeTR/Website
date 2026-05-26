type SendMailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  env?: MailEnv;
};

export type MailEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
};

const mailRecipient = "egitim@gonulilhan.com";
const defaultSender = "Gonul Ilhan <egitim@gonulilhan.com>";

export async function sendMail({
  subject,
  html,
  text,
  replyTo,
  env
}: SendMailInput) {
  const runtimeEnv = resolveMailEnv(env);
  const apiKey = runtimeEnv.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const body = {
    from: runtimeEnv.RESEND_FROM_EMAIL?.trim() || defaultSender,
    to: [mailRecipient],
    subject,
    html,
    text,
    ...(replyTo?.trim() ? { reply_to: replyTo.trim() } : {})
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    signal: controller.signal
  }).finally(() => clearTimeout(timeoutId));

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend request failed: ${errorText}`);
  }

  return response.json() as Promise<{ id: string }>;
}

export function resolveMailEnv(env?: MailEnv): MailEnv {
  return {
    RESEND_API_KEY: env?.RESEND_API_KEY ?? process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: env?.RESEND_FROM_EMAIL ?? process.env.RESEND_FROM_EMAIL
  };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderRows(rows: Array<[string, string]>) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value || "-")}</td>
        </tr>`
    )
    .join("");
}

export function renderText(rows: Array<[string, string]>) {
  return rows.map(([label, value]) => `${label}: ${value || "-"}`).join("\n");
}
