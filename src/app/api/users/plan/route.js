import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import PlanModel from "@/models/planModels";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {_id, email, planName } = reqBody;

    console.log(reqBody);
    
    // const user = await User.findOne({ email: email, });

    const addPlan = new PlanModel({
        "user":_id,
        email,
        planName,
        
       
      });
      const doneplan = await addPlan.save();

    // console.log(user);
    const token = await doneplan.generatePlanToken();
   

    const response = NextResponse.json({
      message: "Plan Added successfully",
      success: true,
      data:doneplan,
    });
    
    response.cookies.set("planToken", token, {
        httpOnly: true,
      });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
