// import { getDataFromToken } from "../../../../healpers/getDatafromToken";
import { connect } from "@/dbConfig/dbConfig";
import MyList from "../../../../models/mylistModels";

import { NextRequest, NextResponse } from "next/server";

import { getDataFromToken } from "@/helpers/getDatafromToken";


connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const mylist = await MyList.findOne({"user": userId});
        return NextResponse.json({
            mesaaage: "List found",
            mylist
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}