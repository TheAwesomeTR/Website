export type AppointmentPayload = {
  service: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  meetingPreference: string;
  message: string;
  consent: boolean;
};

export async function submitAppointmentRequest(payload: AppointmentPayload) {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "appointment",
      payload
    })
  });

  if (!response.ok) {
    throw new Error("Appointment form could not be sent.");
  }

  return response.json() as Promise<{ ok: true; reference: string }>;
}

export const futureBookingIntegrations = [
  "Calendly",
  "Google Calendar",
  "Supabase",
  "Resend",
  "WhatsApp",
  "iyzico / Stripe"
];
