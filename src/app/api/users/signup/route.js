import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      // return NextResponse.json(
      //   { error: "User already exists" },
      //   { status: 400 }
      // );

      const validPassword = await bcryptjs.compare(password, user.password)
      if(!validPassword){
          return NextResponse.json({error: "Invalid password"}, {status: 400})
      }

      const token = await user.generateAuthToken();
   
   
      const response = NextResponse.json({
          message: "Login successful",
        success: true,
        
      });
      response.cookies.set("token", token, {
          httpOnly: true,
        });
  
      return response;
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      // username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    const nuser = await User.findOne({ email: email });
    console.log(nuser);
    const token = await nuser.generateAuthToken();
   
    //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    const response = NextResponse.json({
      message: "User created successfully",
      success: true,
      data:savedUser,
    });
    response.cookies.set("token", token, {
        httpOnly: true,
      });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
