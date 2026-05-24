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
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    ok: true,
    reference: `GI-${Date.now()}`,
    payload
  };
}

export const futureBookingIntegrations = [
  "Calendly",
  "Google Calendar",
  "Supabase",
  "Resend",
  "WhatsApp",
  "iyzico / Stripe"
];
