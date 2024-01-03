'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setAuthuser } from '@/redux/features/userSlice';
import Link from 'next/link';

const Signup = () => {
    const router = useRouter(); 
 
    const dispatch = useDispatch();

    const isloggedin = useSelector((state) => {console.log("rrrmainns",state.authuser); return state.authuser.isloggedin})


    // const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [user, setUser] = React.useState({
        email:"",
        password: "",
    });

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            // setButtonDisabled(false);
        } else {
            // setButtonDisabled(true);
        }
        setUser({...user, email: localStorage.getItem('tempmail')})
        // router.push('/');

    }, [user]);

    

    const onSignup = async () => {
        try {
            // setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            
            router.push('/')

            console.log("Signup success", response.data);
            // dispatch(setAuthuser({isloggedin:true}))
            
        } catch (error) {
            console.log("Signup failed", error.message);
            dispatch(setAuthuser({isloggedin:false,user:null,token:null}))

            alert(error.message)
            
            // toast.error(error.message);
        }finally {
            // setLoading(false);
        }
    }
    const e = localStorage.getItem('tempmail');
  return (<>
    {isloggedin?<><div className='bg-white h-screen'>
      <div className='border-b-[1px]'>

       <div className=' flex mx-auto max-w-[94%]  py-6 justify-between items-center gap-8' >
       <div className='flex-1'>
         <img src="/images/logo.png" className=" h-11  ml-0" alt="Logo" />        
       </div>
       <Link href={'/logout'} className='text-black font-semibold text-xl'>Sign Out</Link>
  
     </div>

      </div>

      <div className='w-[350px] m-auto mt-14 '>
    <h1 className=' text-3xl text-black text-center font-medium mb-6'>Choose your plan.</h1>
    <div style={{color:'black'}} className=' '>
        <ul className='px-5'>
            <li>No commitments, cancel anytime.</li>
            <li>Everything on Netflix for one low price.</li>
            <li>No ads and no extra fees. Ever.</li>
        </ul>
        
        <button style={{color:'white'}} onClick={ () => router.push('/')} className='font-semibold rounded-[4px]  bg-[#e50914] w-full text-xl mt-4  p-5'>Next</button>
        
      
    </div>

</div>
    
   </div></>:

<div className='bg-white h-screen'>
<div className='border-b-[1px]'>

 <div className=' flex mx-auto max-w-[94%]  py-6 justify-between items-center gap-8' >
 <div className='flex-1'>
   <img src="/images/logo.png" className=" h-11  ml-0" alt="Logo" />        
 </div>
 <Link href={'/login'} className='text-black font-semibold text-xl'>Sign In</Link>

  </div>

  </div>

<div className='w-[450px] m-auto mt-14 '>
    <h1 className=' text-3xl text-black font-medium mb-6'>Welcome back!
Joining Netflix is easy.</h1>
   <p className='text-black'>Enter your password and you will be watching in no time.</p>
    <div style={{color:'black'}} className=' '>
        <label>{}Email</label>
        <h3 style={{color:'black'}} className='text-black font-semibold mb-4'  >v{e}</h3> 
        <input className='border  px-4 py-4  bg-[#333] w-full mb-4' onChange={(e) => setUser({...user, password: e.target.value})} placeholder='Password'/>
        <Link href={'/'} className=''>Forgot your password?</Link>
        <button style={{color:'white'}} onClick={onSignup} className='font-semibold rounded-[4px]  bg-[#e50914] w-full text-xl mt-4  p-4'>Next</button>
        
      
    </div>

</div>




</div>

    }

   

    
 </>)
}

export default Signup
