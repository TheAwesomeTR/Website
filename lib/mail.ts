type EmailField = {
  label: string;
  value?: string | boolean;
};

const formRecipient = process.env.FORM_RECIPIENT_EMAIL ?? "egitim@gonulilhan.com";
const fromEmail =
  process.env.FORM_FROM_EMAIL ?? "Gonul Ilhan <egitim@gonulilhan.com>";

export async function sendFormEmail({
  subject,
  replyTo,
  fields
}: {
  subject: string;
  replyTo: string;
  fields: EmailField[];
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const text = fields
    .map((field) => `${field.label}: ${formatValue(field.value)}`)
    .join("\n");

  const htmlRows = fields
    .map(
      (field) => `
        <tr>
          <th style="padding:8px 12px;text-align:left;border-bottom:1px solid #eee;">${escapeHtml(field.label)}</th>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(formatValue(field.value))}</td>
        </tr>`
    )
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: formRecipient,
      reply_to: replyTo,
      subject,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#1f2937;">
          <h1 style="font-size:20px;margin:0 0 16px;">${escapeHtml(subject)}</h1>
          <table style="border-collapse:collapse;width:100%;max-width:720px;">
            ${htmlRows}
          </table>
        </div>`
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend email failed: ${details}`);
  }
}

function formatValue(value: string | boolean | undefined) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value?.trim() || "-";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
