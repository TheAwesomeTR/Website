import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import {
  renderRows,
  renderText,
  resolveMailEnv,
  sendMail,
  type MailEnv
} from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const payload = await readContactPayload(request);
    const validationError = validateContactPayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const contact = normalizeContactPayload(payload);
    const reference = `MSG-${Date.now()}`;
    const rows: Array<[string, string]> = [
      ["Referans", reference],
      ["Ad Soyad", contact.name],
      ["E-posta", contact.email],
      ["Telefon", contact.phone],
      ["Konu", contact.topic],
      ["Mesaj", contact.message]
    ];

    await sendMail({
      subject: `Iletisim formu: ${contact.topic}`,
      replyTo: contact.email,
      env: getMailEnv(),
      html: `
        <h1 style="font-size:20px;">Yeni iletisim formu mesaji</h1>
        <table style="border-collapse:collapse;">${renderRows(rows)}</table>
        <p style="margin-top:16px;color:#6b7280;">Bu mesaj gonulilhan.com iletisim formundan gonderildi.</p>
      `,
      text: `Yeni iletisim formu mesaji\n\n${renderText(rows)}`
    });

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("Contact mail failed", error);

    return NextResponse.json(
      { ok: false, error: "Mesaj su anda gonderilemedi. Lutfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

async function readContactPayload(request: Request): Promise<ContactPayload> {
  const payload = await readJson(request);

  if (!isRecord(payload)) {
    return emptyContactPayload();
  }

  return {
    name: stringValue(payload.name),
    email: stringValue(payload.email),
    phone: stringValue(payload.phone),
    topic: stringValue(payload.topic),
    message: stringValue(payload.message),
    consent: payload.consent === true
  };
}

async function readJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function emptyContactPayload(): ContactPayload {
  return {
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false
  };
}

function validateContactPayload(payload: Partial<ContactPayload>) {
  if (!payload.name?.trim()) return "Ad soyad zorunludur.";
  if (!payload.email?.trim()) return "E-posta zorunludur.";
  if (!payload.message?.trim()) return "Mesaj zorunludur.";
  if (!payload.consent) return "Onay zorunludur.";
  if (!isEmail(payload.email)) return "Gecerli bir e-posta adresi girin.";

  return "";
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

function normalizeContactPayload(payload: ContactPayload): ContactPayload {
  return {
    ...payload,
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    topic: payload.topic.trim(),
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
