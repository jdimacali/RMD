import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service } = body;

    const { error } = await resend.emails.send({
      from: "RMD Accounting <contact@rmdaccounting.com>",
      to: ["rosalindmacatlang@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color: #374151;">
            <div style="width: 100%; background-color: #f3f4f6; padding: 40px 0;">
              <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <!-- Header -->
                <div style="background-color: #1a56db; padding: 24px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
                </div>
                
                <!-- Content -->
                <div style="padding: 32px 24px;">
                  <div style="margin-bottom: 32px;">
                    <h2 style="color: #1a56db; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Contact Information</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; color: #6b7280; width: 140px;"><strong>Name:</strong></td>
                        <td style="padding: 12px 0;">${name}</td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 12px 0; color: #6b7280;"><strong>Email:</strong></td>
                        <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #1a56db; text-decoration: none;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #6b7280;"><strong>Phone:</strong></td>
                        <td style="padding: 12px 0;">${
                          phone
                            ? `<a href="tel:${phone.replace(
                                /\D/g,
                                ""
                              )}" style="color: #1a56db; text-decoration: none;">${phone}</a>`
                            : "Not provided"
                        }</td>
                      </tr>
                      <tr style="background-color: #f9fafb;">
                        <td style="padding: 12px 0; color: #6b7280;"><strong>Company:</strong></td>
                        <td style="padding: 12px 0;">${
                          company || "Not provided"
                        }</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #6b7280;"><strong>Service:</strong></td>
                        <td style="padding: 12px 0;">${service}</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div>
                    <h2 style="color: #1a56db; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Message</h2>
                    <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                  </div>
                </div>
                
                <!-- Footer -->
                <div style="background-color: #f9fafb; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">This email was sent from the contact form on <a href="https://rmdaccounting.com" style="color: #1a56db; text-decoration: none;">RMD Accounting</a></p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
