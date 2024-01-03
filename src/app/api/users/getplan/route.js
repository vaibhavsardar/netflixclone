// import { getDataFromToken } from "../../../../healpers/getDatafromToken";
import { connect } from "@/dbConfig/dbConfig";
import Plan from "@/models/planModels";

import { NextRequest, NextResponse } from "next/server";

import { getDataFromToken } from "@/helpers/getDatafromToken";


connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const plan = await Plan.findOne({user: userId});

        const token = await plan.generatePlanToken();


        const response = NextResponse.json({
            mesaaage: "Plan found",
            plan
        })

        response.cookies.set("planToken", token, {
        httpOnly: true,
      });

      return response;
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}