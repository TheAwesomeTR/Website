export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
};

export async function submitContactMessage(payload: ContactPayload) {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "contact",
      payload
    })
  });

  if (!response.ok) {
    throw new Error("Contact form could not be sent.");
  }

  return response.json() as Promise<{ ok: true; reference: string }>;
}
