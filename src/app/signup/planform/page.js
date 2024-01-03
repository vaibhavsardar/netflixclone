"use client"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Page = () => {
  const [plan,setPlan] = useState('');
  const user = useSelector((state) => {console.log("planform",state.authuser.user); return state.authuser.user})
  const router = useRouter(); 


  const addPlan = async () => {
    try {
        // setLoading(true);
        const response = await axios.post("/api/users/plan",{"planName":plan,"_id":user._id,"email":user.email,"token":user.token});
        alert("Plan add success", response.data);
        router.push("/browse");
    } catch (error) {
        console.log("Plan add failed", error.message);
    } finally{
    // setLoading(false);
    }
}

  return (
    <>
      <div className='bg-white text-black h-screen'>
      <div className='border-b-[1px]'>

       <div className=' flex mx-auto max-w-[94%]  py-6 justify-between items-center gap-8' >
       <div className='flex-1'>
         <img src="/images/logo.png" className=" h-11  ml-0" alt="Logo" />        
       </div>
       <Link href={'/logout'} className='text-black font-semibold text-xl'>Sign Out</Link>
  
     </div>

      </div>
      <label for="Plan">Choose a Plan: {plan}</label>
  <select onChange={(e)=>setPlan(e.target.value) } className='text-black' id="plan" name="plan">
    <option value="Mobile">Mobile</option>
    <option value="Basic">Basic</option>
    <option value="Standard">Standard</option>
    <option value="Premium">Premium</option>
  </select>
  <button onClick={addPlan}>Add</button>
   </div>
     
    </>
  )
}

export default Page
