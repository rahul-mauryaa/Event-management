import { NextResponse } from "next/server"
import { sendContactEmail, type ContactSubmission } from "@/lib/mail"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactSubmission

    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      )
    }

    if (!body.email || !body.email.trim() || !body.email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    if (!body.phone || !body.phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your phone / WhatsApp number." },
        { status: 400 }
      )
    }

    const result = await sendContactEmail({
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      service: body.service?.trim() || "General Event Inquiry",
      date: body.date?.trim(),
      guests: body.guests?.trim(),
      message: body.message?.trim(),
    })

    return NextResponse.json({
      success: true,
      message: "Your event blueprint request has been sent successfully to Feature Brights!",
      messageId: result.messageId,
    })
  } catch (error: any) {
    console.error("Error in /api/contact:", error)
    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to send email. Please try again or reach us directly at +91-977-326-9662.",
      },
      { status: 500 }
    )
  }
}
