import { Resend } from "resend";

// EMAIL SENDGING FUCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `garsetayusuf@gmail.com`,
    subject: `${name} From Contact Form.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

  formdata.delete("message");
  formdata.delete("name");
  formdata.delete("SenderEmail");
  return true;
};
