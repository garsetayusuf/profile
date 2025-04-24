import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body to extract form data
    const body = await request.json();
    const { name, senderEmail, message } = body;

    // Validate the required fields
    if (!name || !senderEmail || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Send the email using Resend
    const response = await resend.emails.send({
      from: "Profile <onboarding@resend.dev>",
      to: ["garsetayusuf@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        name: name,
        senderEmail: senderEmail,
        message: message,
      }) as React.ReactElement,
    });

    if (!response || !response.id) {
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ data: response }), { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
