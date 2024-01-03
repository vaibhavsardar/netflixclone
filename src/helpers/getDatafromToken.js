import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

export const getDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, 'ADHFGJLGLFDGJDHFYGD');
        console.log("dtoken",decodedToken)
        return decodedToken._id;
    } catch (error) {
        throw new Error(error.message);
    }

}