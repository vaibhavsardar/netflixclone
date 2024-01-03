import { NextResponse } from 'next/server'
// import User from "@/models/userModels";
// import { connect } from "@/dbConfig/dbConfig";


// connect();



export async function  middleware(request) {

  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/verifyemail'
  const isdonePath = path === '/'|| path === '/signup' || path === '/signup/planform' || path === '/login'


  const token = request.cookies.get('token')?.value || ''
  const planToken = request.cookies.get('planToken')?.value || ''


  

  

  // if (!(path ==='/login' || path === '/signup') && !token) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl))
  // }

  // if ((isdonePath) && (token && planToken)) {
  //   return NextResponse.redirect(new URL('/browse', request.nextUrl))
  // }
    
  // if (!(path ==='/signup/planform' || path === '/signup') && (token && !planToken)) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl))
  // }

 
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    
    '/login',
    '/signup',
   
  ]
}