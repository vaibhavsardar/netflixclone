'use client'
import Link from 'next/link';
import React, { useState } from 'react'
// import hero from '/hero.png';
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const [email,setEmail] = useState('');
  const isloggedin = useSelector((state) => {console.log("rrrmainn",state.authuser); return state.authuser.isloggedin})


  return (
    <div className=' h-[700px]' style={{ backgroundImage:`url(/images/hero.jpg)`, }} >
      <div className=' h-full' style={{background: 'rgba(0, 0, 0, 0.6)'}}>
      
      <div className=' flex mx-auto max-w-[79%]  py-6 justify-between items-center gap-8' >
        <div className='flex-1'>
          <img src="/images/logo.png" className=" h-10  ml-0" alt="Logo" />        
        </div>
       
        <button className=' py-1 px-2 font-medium border-solid border-white rounded-[4px] '>English</button>
        {isloggedin ?        <Link href={'/logout'} className=' py-1 px-2 font-medium rounded-[4px] bg-[#e50914] '>Sign Out </Link>:  <Link href={'/login'} className=' py-1 px-2 font-medium rounded-[4px] bg-[#e50914] '>Sign In </Link>
}
      
      </div>

      <div className=' mx-auto max-w-[1000px] mt-36 '>
        <h1 className=' text-5xl text-center font-extrabold  mb-2'>Unlimited movies, TV shows and more</h1>
        <h2 className=' text-center  text-3xl mb-2'>Join today. Cancel anytime.</h2>
        <p className=' text-center text-xl mb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className='flex justify-center '>
          <div className='flex justify-center gap-2'>
                {isloggedin ? <Link href={'/signup'}  className=' text-xl font-semibold rounded-[4px] bg-[#e50914] p-3'>Finish Sign up &#62;</Link>
                  :<><div className=' border-2 rounded-md'><input onChange={(e)=> setEmail(e.target.value)}  className='bg-transparent text-white p-3 rounded-md '   defaultValue={!localStorage.getItem('tempmail')?null:localStorage.getItem('tempmail')} placeholder='Email address'/></div> 
            <Link href={'/signup'} onClick={()=>{localStorage.setItem("tempmail",email)}}  className=' text-xl font-semibold rounded-[4px] bg-[#e50914] p-3'>Get Started &#62;</Link>
         </>}
            
          </div>
        </form>
      </div>
    
  </div>

    </div>
    
  )
}

export default Header;
