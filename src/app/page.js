"use client"
import Banner from "../components/Banner"
import Header from "@/components/Header"
import FAQ from '@/components/FAQ'
import { useEffect } from "react"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import Footer from "@/components/Footer"

export default function Home() {




  useEffect(()=>{

    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')

      console.log("resmepp",res.data.user);

  }

  //  getUserDetails();
  },[]);

  return (
   <div style={{backgroundColor:"black" }}>
    
   <Header/>
   <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>
   <Banner/>
   <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>
   <FAQ/>
   <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>

   <Footer/>

    

   </div>
  )
}