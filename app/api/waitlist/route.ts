import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // future DB integration goes here
    console.log("New waitlist signup:", email);

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist",
      email
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong"
      },
      { status: 500 }
    );
  }
}
