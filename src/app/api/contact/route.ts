import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_APP_PASS;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

console.log("GMAIL_USER", GMAIL_USER);
console.log("GMAIL_PASS", GMAIL_PASS);  
console.log("CLIENT_EMAIL", CLIENT_EMAIL);

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message, phone, phoneCode } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!GMAIL_USER || !GMAIL_PASS || !CLIENT_EMAIL) {
      console.error("Missing email credentials in environment variables.");
      return NextResponse.json({ message: "Server misconfiguration." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: CLIENT_EMAIL,
      subject: `New Contact Form Submission - ${service}`,
      text: `You received a new message from "${name}" (${email}):
      \n
      ${name} is interested in ${service}.
      \n 
      Contact details:
      \n
      Phone: ${phoneCode} ${phone}
      email: ${email}
      \n 
      Message:
      ${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email." }, { status: 500 });
  }
}
