import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  renderRows,
  renderText,
  resolveMailEnv,
  sendMail,
  type MailEnv
} from "@/lib/mail";
import type { AppointmentPayload } from "@/lib/booking";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AppointmentPayload;
    const validationError = validateAppointmentPayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const appointment = normalizeAppointmentPayload(payload);
    const reference = `GI-${Date.now()}`;
    const rows: Array<[string, string]> = [
      ["Referans", reference],
      ["Hizmet / Egitim", appointment.service],
      ["Ad Soyad", appointment.name],
      ["E-posta", appointment.email],
      ["Telefon", appointment.phone],
      ["Tercih edilen tarih", appointment.preferredDate],
      ["Tercih edilen saat", appointment.preferredTime],
      ["Gorusme tercihi", appointment.meetingPreference],
      ["Mesaj", appointment.message]
    ];

    await sendMail({
      subject: `Randevu talebi: ${appointment.service}`,
      replyTo: appointment.email,
      env: getMailEnv(),
      html: `
        <h1 style="font-size:20px;">Yeni randevu talebi</h1>
        <table style="border-collapse:collapse;">${renderRows(rows)}</table>
        <p style="margin-top:16px;color:#6b7280;">Bu mesaj gonulilhan.com randevu formundan gonderildi.</p>
      `,
      text: `Yeni randevu talebi\n\n${renderText(rows)}`
    });

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("Appointment mail failed", error);

    return NextResponse.json(
      { ok: false, error: "Randevu talebi su anda gonderilemedi. Lutfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

function validateAppointmentPayload(payload: Partial<AppointmentPayload>) {
  if (!payload.service?.trim()) return "Hizmet veya egitim secimi zorunludur.";
  if (!payload.name?.trim()) return "Ad soyad zorunludur.";
  if (!payload.email?.trim()) return "E-posta zorunludur.";
  if (!payload.phone?.trim()) return "Telefon zorunludur.";
  if (!payload.preferredDate?.trim()) return "Tarih zorunludur.";
  if (!payload.consent) return "Onay zorunludur.";
  if (!isEmail(payload.email)) return "Gecerli bir e-posta adresi girin.";

  return "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeAppointmentPayload(payload: AppointmentPayload): AppointmentPayload {
  return {
    ...payload,
    service: payload.service.trim(),
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    preferredDate: payload.preferredDate.trim(),
    preferredTime: payload.preferredTime.trim(),
    meetingPreference: payload.meetingPreference.trim(),
    message: payload.message.trim()
  };
}

function getMailEnv(): MailEnv {
  try {
    return resolveMailEnv(getCloudflareContext().env as MailEnv);
  } catch {
    return resolveMailEnv();
  }
}
