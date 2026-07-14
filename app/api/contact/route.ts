import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in the required fields." },
        { status: 400 }
      );
    }

    const host = process.env.NODEMAILER_HOST;
    const port = process.env.NODEMAILER_PORT;
    const user = process.env.NODEMAILER_USER;
    const pass = process.env.NODEMAILER_PASS;

    if (!host || !port || !user || !pass) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email delivery is not configured on the live server yet. Please set the SMTP environment variables before sending messages.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: false,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: user,
      to: "serviceclient@onechoicelogistics.com",
      replyTo: email,
      subject: `New contact form submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email error:", error);
    const message = error instanceof Error ? error.message : "Unknown SMTP error";
    return NextResponse.json(
      {
        success: false,
        message: `Unable to send your message right now. ${message}`,
      },
      { status: 500 }
    );
  }
}
