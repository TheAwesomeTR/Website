import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/mail";
import type { AppointmentPayload } from "@/lib/booking";
import type { ContactPayload } from "@/lib/contact";

type FormRequest =
  | {
      type: "appointment";
      payload: AppointmentPayload;
    }
  | {
      type: "contact";
      payload: ContactPayload;
    };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<FormRequest>;

    if (body.type === "appointment" && isAppointmentPayload(body.payload)) {
      const reference = `GI-${Date.now()}`;

      await sendFormEmail({
        subject: `Yeni randevu talebi - ${body.payload.service}`,
        replyTo: body.payload.email,
        fields: [
          { label: "Reference", value: reference },
          { label: "Form", value: "Randevu Talebi" },
          { label: "Hizmet / Egitim", value: body.payload.service },
          { label: "Ad Soyad", value: body.payload.name },
          { label: "E-posta", value: body.payload.email },
          { label: "Telefon", value: body.payload.phone },
          { label: "Tercih Edilen Tarih", value: body.payload.preferredDate },
          { label: "Tercih Edilen Saat", value: body.payload.preferredTime },
          { label: "Gorusme Tercihi", value: body.payload.meetingPreference },
          { label: "Mesaj", value: body.payload.message },
          { label: "KVKK Onayi", value: body.payload.consent }
        ]
      });

      return NextResponse.json({ ok: true, reference });
    }

    if (body.type === "contact" && isContactPayload(body.payload)) {
      const reference = `MSG-${Date.now()}`;

      await sendFormEmail({
        subject: `Yeni iletisim mesaji - ${body.payload.topic}`,
        replyTo: body.payload.email,
        fields: [
          { label: "Reference", value: reference },
          { label: "Form", value: "Iletisim Formu" },
          { label: "Konu", value: body.payload.topic },
          { label: "Ad Soyad", value: body.payload.name },
          { label: "E-posta", value: body.payload.email },
          { label: "Telefon", value: body.payload.phone },
          { label: "Mesaj", value: body.payload.message },
          { label: "KVKK Onayi", value: body.payload.consent }
        ]
      });

      return NextResponse.json({ ok: true, reference });
    }

    return NextResponse.json({ ok: false, error: "Invalid form payload." }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Form could not be sent." }, { status: 500 });
  }
}

function isContactPayload(payload: unknown): payload is ContactPayload {
  if (!isRecord(payload)) return false;

  return (
    isFilledString(payload.name) &&
    isEmail(payload.email) &&
    typeof payload.phone === "string" &&
    isFilledString(payload.topic) &&
    isFilledString(payload.message) &&
    payload.consent === true
  );
}

function isAppointmentPayload(payload: unknown): payload is AppointmentPayload {
  if (!isRecord(payload)) return false;

  return (
    isFilledString(payload.service) &&
    isFilledString(payload.name) &&
    isEmail(payload.email) &&
    isFilledString(payload.phone) &&
    isFilledString(payload.preferredDate) &&
    isFilledString(payload.preferredTime) &&
    isFilledString(payload.meetingPreference) &&
    typeof payload.message === "string" &&
    payload.consent === true
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isFilledString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isEmail(value: unknown): value is string {
  return isFilledString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
