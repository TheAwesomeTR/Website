export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
};

export async function submitContactMessage(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = (await response.json()) as {
    ok: boolean;
    reference?: string;
    error?: string;
  };

  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? "Mesaj gonderilemedi.");
  }

  return {
    ok: result.ok,
    reference: result.reference
  };
}
