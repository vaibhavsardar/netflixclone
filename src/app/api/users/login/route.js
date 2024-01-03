import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json()
    const {email, password} = reqBody;
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({email})
    if(!user){
        return NextResponse.json({error: "User does not exist"}, {status: 400})
    }
    console.log("user exists");
    
    
    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password)
    if(!validPassword){
        return NextResponse.json({error: "Invalid password"}, {status: 400})
    }
    console.log(user);
    
    const token = await user.generateAuthToken();
   
   
    const response = NextResponse.json({
        message: "Login successful",
      success: true,
      
    });
    response.cookies.set("token", token, {
        httpOnly: true,
      });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
