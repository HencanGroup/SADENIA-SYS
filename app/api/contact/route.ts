import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^[+()\d\s-]{6,20}$/)
    .optional()
    .or(z.literal("")),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { name, email, phone, subject, message } = result.data;

    if (!process.env.RESEND_API_KEY) {
      console.log("[Contact Form] No RESEND_API_KEY — logging submission:", {
        name,
        email,
        phone,
        subject,
        message,
      });
      return NextResponse.json({ success: true, message: "Form submitted (demo mode)." });
    }

    const emailData = {
      name,
      email,
      subject,
      message,
      ...(phone ? { phone } : {}),
    };

    await sendContactEmail(emailData);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("[Contact Form] Error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 },
    );
  }
}
