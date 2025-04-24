import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body to extract form data
    const body = await request.json();
    const { name, senderEmail, message } = body;

    // Validate the required fields
    if (!name || !senderEmail || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: "Profile <onboarding@resend.dev>",
      to: ["garsetayusuf@gmail.com"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        name,
        senderEmail,
        message,
      }),
    });

    return Response.json({ data });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
