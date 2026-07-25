import { NextResponse } from "next/server";
import { z } from "zod";

// Zod Schema to validate contact input payload
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9+\s-]{10,15}$/, "Invalid phone format (must be 10-15 digits)"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(1, "Project selection is required"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Privacy consent is mandatory"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Simulate backend database storage delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: `Thank you, ${validatedData.name}! Your enquiry regarding ${validatedData.project} has been registered successfully.`,
    });
  } catch (error) {
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
        message: "An internal server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
