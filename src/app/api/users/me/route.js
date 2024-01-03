// import { getDataFromToken } from "../../../../healpers/getDatafromToken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";

import { NextRequest, NextResponse } from "next/server";

import { getDataFromToken } from "@/helpers/getDatafromToken";


connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}