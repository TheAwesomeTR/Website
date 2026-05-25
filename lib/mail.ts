type SendMailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  env?: MailEnv;
};

export type MailEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
};

const mailRecipient = "egitim@gonulilhan.com";
const defaultSender = "Gonul Ilhan <egitim@gonulilhan.com>";

export async function sendMail({
  subject,
  html,
  text,
  replyTo,
  env = {}
}: SendMailInput) {
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL ?? defaultSender,
      to: [mailRecipient],
      reply_to: replyTo,
      subject,
      html,
      text
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend request failed: ${errorText}`);
  }

  return response.json() as Promise<{ id: string }>;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderRows(rows: Array<[string, string]>) {
  return rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value || "-")}</td>
        </tr>`
    )
    .join("");
}

export function renderText(rows: Array<[string, string]>) {
  return rows.map(([label, value]) => `${label}: ${value || "-"}`).join("\n");
}
