import nodemailer from "nodemailer"

export interface ContactSubmission {
  name: string
  email: string
  phone: string
  service: string
  date?: string
  guests?: string
  message?: string
}

export function getMailTransporter() {
  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim()
  const port = Number(process.env.SMTP_PORT) || 465
  const secure = process.env.SMTP_SECURE !== "false"
  const user = (process.env.SMTP_USER || "featurebrights15@gmail.com").trim()
  const pass = (process.env.SMTP_PASS || "piyqbsttuksmqwgm").trim()

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })
}

export async function sendContactEmail(data: ContactSubmission) {
  const transporter = getMailTransporter()
  const recipient = (process.env.CONTACT_RECIPIENT_EMAIL || "featurebrights15@gmail.com").trim()
  const senderUser = (process.env.SMTP_USER || "featurebrights15@gmail.com").trim()
  const senderName = process.env.CONTACT_SENDER_NAME || "Feature Brights Website"

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f6ede4; margin: 0; padding: 20px; color: #4a3421; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(74, 52, 33, 0.08); border: 1px solid #e5d8cb; }
          .header { background: linear-gradient(135deg, #4a3421 0%, #2b1c11 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; color: #e5c8a7; }
          .header p { margin: 6px 0 0 0; font-size: 12px; color: #ffffff; opacity: 0.8; text-transform: uppercase; letter-spacing: 1.5px; }
          .content { padding: 28px 24px; }
          .badge { display: inline-block; background: #f6ede4; color: #b08355; font-size: 11px; font-weight: bold; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px; }
          .info-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
          .info-table td { padding: 12px 10px; border-bottom: 1px solid #f0e6dc; font-size: 14px; }
          .info-table td.label { font-weight: bold; color: #765f4c; width: 38%; }
          .info-table td.value { color: #4a3421; font-weight: 600; }
          .message-box { margin-top: 20px; background: #fdf8f3; border: 1px solid #e5d8cb; border-radius: 12px; padding: 16px; }
          .message-box h3 { margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #b08355; letter-spacing: 0.5px; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #4a3421; white-space: pre-wrap; }
          .footer { background: #fdf8f3; padding: 16px; text-align: center; font-size: 11px; color: #765f4c; border-top: 1px solid #e5d8cb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Feature Brights</h1>
            <p>New Event Inquiry Received</p>
          </div>
          <div class="content">
            <span class="badge">Inquiry Details</span>
            <table class="info-table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${data.name}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${data.email}" style="color: #b08355; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value"><a href="tel:${data.phone}" style="color: #b08355; text-decoration: none;">${data.phone}</a></td>
              </tr>
              <tr>
                <td class="label">Requested Service</td>
                <td class="value">${data.service || "General Inquiry"}</td>
              </tr>
              ${
                data.date
                  ? `
              <tr>
                <td class="label">Target Date</td>
                <td class="value">${data.date}</td>
              </tr>`
                  : ""
              }
              ${
                data.guests
                  ? `
              <tr>
                <td class="label">Estimated Guests</td>
                <td class="value">${data.guests}</td>
              </tr>`
                  : ""
              }
            </table>

            ${
              data.message
                ? `
            <div class="message-box">
              <h3>Client Vision / Notes:</h3>
              <p>${data.message}</p>
            </div>`
                : ""
            }
          </div>
          <div class="footer">
            Sent securely from Feature Brights Website Contact Form • Vesu, Surat
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
NEW EVENT INQUIRY - FEATURE BRIGHTS
------------------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service || "General Inquiry"}
Target Date: ${data.date || "Not specified"}
Estimated Guests: ${data.guests || "Not specified"}

Message / Vision:
${data.message || "None provided"}
------------------------------------
Sent from Feature Brights Website Contact Form
`

  const adminMail = await transporter.sendMail({
    from: `"${senderName}" <${senderUser}>`,
    to: recipient,
    replyTo: data.email,
    subject: `🌟 New Event Inquiry: ${data.name} - ${data.service || "Proposal Request"}`,
    text: textContent,
    html: htmlContent,
  })

  // Acknowledgment email to the client
  if (data.email && data.email.includes("@")) {
    try {
      await transporter.sendMail({
        from: `"Feature Brights Events" <${senderUser}>`,
        to: data.email,
        subject: `Thank you for contacting Feature Brights, ${data.name}!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5d8cb; border-radius: 12px; background: #ffffff;">
            <h2 style="color: #4a3421; margin-top: 0;">Hello ${data.name},</h2>
            <p style="color: #555; line-height: 1.6;">Thank you for reaching out to <strong>Feature Brights south wedding planner</strong>. We have received your inquiry for <em>${data.service || "event planning"}</em>.</p>
            <p style="color: #555; line-height: 1.6;">Our senior event producer is reviewing your details and will connect with you via phone/WhatsApp within 24 hours.</p>
            <div style="margin: 20px 0; padding: 15px; background: #fdf8f3; border-radius: 8px; font-size: 13px; color: #4a3421;">
              <strong>Studio Address:</strong> Block no. C, Ratna Madhav, Shop no. 3 near Diamond Jalaram Temple, Vesu, Surat, Gujarat 395007<br/>
              <strong>Call / WhatsApp:</strong> +91-977-326-9662<br/>
              <strong>Email:</strong> featurebrights15@gmail.com
            </div>
            <p style="color: #888; font-size: 12px; margin-bottom: 0;">Warm regards,<br/><strong>Feature Brights Team</strong></p>
          </div>
        `,
      })
    } catch (ackError) {
      console.warn("Client acknowledgment email could not be sent:", ackError)
    }
  }

  return adminMail
}
