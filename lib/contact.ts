export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
};

export async function submitContactMessage(payload: ContactPayload) {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    ok: true,
    reference: `MSG-${Date.now()}`,
    payload
  };
}
