import { NextResponse } from "next/server";
import { renderRows, renderText, sendMail } from "@/lib/mail";
import type { AppointmentPayload } from "@/lib/booking";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AppointmentPayload;
    const validationError = validateAppointmentPayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const reference = `GI-${Date.now()}`;
    const rows: Array<[string, string]> = [
      ["Referans", reference],
      ["Hizmet / Egitim", payload.service],
      ["Ad Soyad", payload.name],
      ["E-posta", payload.email],
      ["Telefon", payload.phone],
      ["Tercih edilen tarih", payload.preferredDate],
      ["Tercih edilen saat", payload.preferredTime],
      ["Gorusme tercihi", payload.meetingPreference],
      ["Mesaj", payload.message]
    ];

    await sendMail({
      subject: `Randevu talebi: ${payload.service}`,
      replyTo: payload.email,
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
