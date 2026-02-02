import { ENV } from "./env";

export type ContactNotificationPayload = {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  source?: string | null;
  message: string;
};

/**
 * Sends an HTML email notification via Resend when a contact form is submitted.
 * Returns true if the email was sent successfully, false otherwise.
 */
export async function notifyContactSubmission(
  payload: ContactNotificationPayload
): Promise<boolean> {
  if (!ENV.resendApiKey) {
    console.warn("[Notification] RESEND_API_KEY is not configured, skipping email");
    return false;
  }

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f5f7;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#132843;padding:24px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;">New Contact Form Submission</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                    <strong style="color:#132843;">Name:</strong>
                    <span style="color:#374151;margin-left:8px;">${escapeHtml(payload.name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                    <strong style="color:#132843;">Email:</strong>
                    <a href="mailto:${escapeHtml(payload.email)}" style="color:#3966A2;margin-left:8px;text-decoration:none;">${escapeHtml(payload.email)}</a>
                  </td>
                </tr>
                ${payload.company ? `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                    <strong style="color:#132843;">Company:</strong>
                    <span style="color:#374151;margin-left:8px;">${escapeHtml(payload.company)}</span>
                  </td>
                </tr>` : ""}
                ${payload.phone ? `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                    <strong style="color:#132843;">Phone:</strong>
                    <span style="color:#374151;margin-left:8px;">${escapeHtml(payload.phone)}</span>
                  </td>
                </tr>` : ""}
                ${payload.source ? `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">
                    <strong style="color:#132843;">Source Page:</strong>
                    <span style="color:#374151;margin-left:8px;">${escapeHtml(payload.source)}</span>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:16px 0 0 0;">
                    <strong style="color:#132843;">Message:</strong>
                    <div style="margin-top:8px;padding:16px;background-color:#f9fafb;border-radius:6px;color:#374151;line-height:1.6;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#6b7280;font-size:12px;">Submitted on ${timestamp} (EST)</p>
              <p style="margin:4px 0 0 0;color:#6b7280;font-size:12px;">Illuminious LLC &mdash; Contact Form Notification</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Illuminious Contact <${ENV.resendFromEmail}>`,
        to: ["info@illuminious.com"],
        subject: `New Contact Form Submission from ${payload.name}`,
        html: htmlBody,
        reply_to: payload.email,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Resend email failed (${response.status}): ${detail}`
      );
      return false;
    }

    console.log(`[Notification] Contact form email sent for ${payload.name}`);
    return true;
  } catch (error) {
    console.warn("[Notification] Error sending email via Resend:", error);
    return false;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
