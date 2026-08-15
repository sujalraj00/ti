import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Zod Schema to validate contact input payload
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9+\s-]{10,15}$/, "Invalid phone format (must be 10-15 digits)"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(1, "Project selection is required"),
  message: z.string().optional(),
  consent: z.boolean().optional(),
});

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "localhost",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    const isSmtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (isSmtpConfigured) {
      // Send real email
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || "no-reply@terrainfracon.com",
        to: "sales@terrainfracon.com",
        subject: `New Project Enquiry: ${validatedData.project}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #c5a85c; background-color: #0A0A0A; color: #F5F5F0;">
            <h2 style="color: #c5a85c; border-bottom: 1px solid #c5a85c; padding-bottom: 10px; font-family: serif;">New Project Enquiry Registry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #c5a85c;">Name:</td>
                <td style="padding: 8px 0;">${validatedData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #c5a85c;">Phone:</td>
                <td style="padding: 8px 0;">${validatedData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #c5a85c;">Email:</td>
                <td style="padding: 8px 0;">${validatedData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #c5a85c;">Project:</td>
                <td style="padding: 8px 0;">${validatedData.project}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #c5a85c; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-wrap;">${validatedData.message || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #c5a85c;">Consent:</td>
                <td style="padding: 8px 0;">${validatedData.consent ? "Yes" : "Not explicitly checked"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; font-size: 10px; color: #888; border-top: 1px solid #222; padding-top: 10px;">
              Sent automatically from Terra Infracon Website Enquiry Portal.
            </div>
          </div>
        `,
      });
    } else {
      console.warn("SMTP configurations are missing in environment variables. Form submission logged locally:\n", validatedData);
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${validatedData.name}! Your enquiry regarding ${validatedData.project} has been registered successfully.`,
    });
  } catch (error) {
    console.error("Enquiry form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while registering your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
