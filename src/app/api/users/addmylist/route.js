import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import PlanModel from "@/models/planModels";
import MyList from "../../../../models/mylistModels";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {_id,mediaId,type } = reqBody;

    console.log(reqBody);
    
    const isthere = await MyList.findOne({ "user": _id});
    if(isthere){
      const added = await MyList.findOneAndUpdate({ user: _id,},{ $push: { "listarray":{ mediaId,type} } });

    } else{
      const addnew = new MyList({ 'user': _id,"listarray": [{mediaId,type}]} );
      const added = await addnew.save();

    }



    // const addPlan = new PlanModel({
    //     "user":_id,
    //     email,
    //     planName,
        
       
    //   });
    //   const doneplan = await addPlan.save();

       

    const response = NextResponse.json({
      message: "Media Added successfully",
      success: true,
      // data:added,
    });
    

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
