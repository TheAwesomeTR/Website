import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  renderRows,
  renderText,
  resolveMailEnv,
  sendMail,
  type MailEnv
} from "@/lib/mail";
import { enforceRateLimit, getClientIp } from "@/lib/rate-limit";
import type { AppointmentPayload } from "@/lib/booking";

const allowedMeetingPreferences = new Set(["Online", "Yüz yüze", "Uygunluğa göre"]);

export async function POST(request: Request) {
  try {
    const rateLimitedResponse = checkRateLimit(request, "appointments");
    if (rateLimitedResponse) {
      return rateLimitedResponse;
    }

    const payload = await readAppointmentPayload(request);
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

async function readAppointmentPayload(request: Request): Promise<AppointmentPayload> {
  const payload = await readJson(request);

  if (!isRecord(payload)) {
    return emptyAppointmentPayload();
  }

  return {
    service: stringValue(payload.service),
    name: stringValue(payload.name),
    email: stringValue(payload.email),
    phone: stringValue(payload.phone),
    preferredDate: stringValue(payload.preferredDate),
    preferredTime: stringValue(payload.preferredTime),
    meetingPreference: stringValue(payload.meetingPreference),
    message: stringValue(payload.message),
    consent: payload.consent === true,
    website: stringValue(payload.website)
  };
}

async function readJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function emptyAppointmentPayload(): AppointmentPayload {
  return {
    service: "",
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    meetingPreference: "",
    message: "",
    consent: false,
    website: ""
  };
}

function validateAppointmentPayload(payload: Partial<AppointmentPayload>) {
  if (payload.website?.trim()) return "Randevu talebi gonderilemedi.";
  if (!payload.service?.trim()) return "Hizmet veya egitim secimi zorunludur.";
  if (!payload.name?.trim()) return "Ad soyad zorunludur.";
  if (!payload.email?.trim()) return "E-posta zorunludur.";
  if (!payload.phone?.trim()) return "Telefon zorunludur.";
  if (!payload.preferredDate?.trim()) return "Tarih zorunludur.";
  if (!payload.consent) return "Onay zorunludur.";
  if (!isEmail(payload.email)) return "Gecerli bir e-posta adresi girin.";
  if (!isValidDate(payload.preferredDate)) return "Tarih formati gecersiz.";
  if (isPastDate(payload.preferredDate)) return "Gecmis bir tarih secilemez.";
  if (!allowedMeetingPreferences.has(payload.meetingPreference?.trim() ?? "")) return "Gorusme tercihi gecersiz.";
  if (payload.name.trim().length > 80) return "Ad soyad en fazla 80 karakter olabilir.";
  if (payload.message?.trim().length && payload.message.trim().length > 2000) return "Mesaj en fazla 2000 karakter olabilir.";

  return "";
}

function isValidDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isPastDate(value: string) {
  const today = new Date();
  const utcToday = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  const [year, month, day] = value.split("-").map(Number);
  const inputDate = Date.UTC(year, month - 1, day);

  return inputDate < utcToday;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
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
    message: payload.message.trim(),
    website: ""
  };
}

function getMailEnv(): MailEnv {
  try {
    return resolveMailEnv(getCloudflareContext().env as MailEnv);
  } catch {
    return resolveMailEnv();
  }
}

function checkRateLimit(request: Request, route: string) {
  const ip = getClientIp(request);
  const result = enforceRateLimit({
    key: `${route}:${ip}`,
    limit: 6,
    windowMs: 60_000
  });

  if (result.ok) return null;

  return NextResponse.json(
    { ok: false, error: "Cok fazla deneme yapildi. Lutfen biraz bekleyin." },
    {
      status: 429,
      headers: { "Retry-After": String(result.retryAfterSeconds) }
    }
  );
}
