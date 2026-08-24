import nodemailer from "nodemailer";

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const subjectLabels: Record<string, string> = {
  services: "Services Inquiry",
  partnership: "Partnership",
  support: "Support Request",
  other: "General Inquiry",
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: port ? Number(port) : 587,
    secure: port === "465",
    auth: { user, pass },
  });
}

export async function sendContactEmail(data: ContactEmailData) {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error("Email service not configured");
  }

  const subjectLabel = subjectLabels[data.subject] ?? data.subject;
  const fromName = process.env.SMTP_FROM_NAME || "Sadenia Systems";
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "noreply@sadenia.com";
  const toEmail = process.env.SMTP_TO_EMAIL || "info@sadenia.com";

  const info = await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: toEmail,
    replyTo: data.email,
    subject: `[${subjectLabel}] ${data.name} — Contact Form`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0;">${data.phone}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
            <td style="padding: 8px 0;">${subjectLabel}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <p style="font-weight: bold; color: #555; margin: 0 0 8px 0;">Message:</p>
          <p style="margin: 0; line-height: 1.6;">${data.message.replace(/\n/g, "<br/>")}</p>
        </div>
        <p style="margin-top: 16px; font-size: 12px; color: #999;">
          Sent from Sadenia Systems contact form
        </p>
      </div>
    `,
  });

  return info;
}
