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
  const response = await fetch("/api/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await readSubmitResponse(response);

  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? "Randevu talebi gonderilemedi.");
  }

  return {
    ok: result.ok,
    reference: result.reference
  };
}

async function readSubmitResponse(response: Response) {
  try {
    return (await response.json()) as {
      ok: boolean;
      reference?: string;
      error?: string;
    };
  } catch {
    return {
      ok: false,
      error: response.ok
        ? "Randevu talebi gonderilemedi."
        : "Randevu talebi su anda gonderilemedi."
    };
  }
}
