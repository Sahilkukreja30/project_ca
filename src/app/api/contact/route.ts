import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
        status: 400,
      });
    }

    // ---- 1️⃣ Create transporter ----
   const emailuser = process.env.EMAIL
    const pass = process.env.EMAIL_PASS
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth : {
            user: emailuser,
            pass: pass
        }
    })

    // ---- 2️⃣ Compose message ----
    const mailOptions = {
      from: `"Website Contact" <${email}>`,
      to: process.env.EMAIL,
      subject: subject || "New Website Enquiry",
      html: `
        <div style="font-family:sans-serif;line-height:1.6;">
          <h2 style="color:#0F2742;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr/>
          <p style="font-size:12px;color:#777;">This message was sent from your website contact form.</p>
        </div>
      `,
    };

    // ---- 3️⃣ Send email ----
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Mail error:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send message" }), {
      status: 500,
    });
  }
}
