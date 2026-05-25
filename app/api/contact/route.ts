import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import { renderRows, renderText, sendMail, type MailEnv } from "@/lib/mail";
import type { ContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validationError = validateContactPayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const reference = `MSG-${Date.now()}`;
    const rows: Array<[string, string]> = [
      ["Referans", reference],
      ["Ad Soyad", payload.name],
      ["E-posta", payload.email],
      ["Telefon", payload.phone],
      ["Konu", payload.topic],
      ["Mesaj", payload.message]
    ];

    await sendMail({
      subject: `Iletisim formu: ${payload.topic}`,
      replyTo: payload.email,
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

function getMailEnv(): MailEnv {
  try {
    return getCloudflareContext().env as MailEnv;
  } catch {
    return {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL
    };
  }
}
