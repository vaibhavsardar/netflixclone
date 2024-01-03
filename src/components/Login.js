'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Login = () => {
  const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/login", user);
          console.log("Login success", response.data);
          router.push("/");
      } catch (error) {
          console.log("Login failed", error.message);
          toast.error(error.message);
      } finally{
      setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0) {
          setButtonDisabled(false);
      } else{
          setButtonDisabled(true);
      }
  }, [user]);

  return (
    <>
      <div className=' h-screen' style={{ backgroundImage:`url(/images/hero.jpg)`, }} >
      <div className=' h-full' style={{background: 'rgba(0, 0, 0, 0.6)'}}>
      
      <div className=' flex mx-auto max-w-[95%]  py-6 justify-between items-center gap-8' >
        <div className='flex-1'>
          <img src="/images/logo.png" className=" h-11  ml-0" alt="Logo" />        
        </div>
   
      </div>

      <div className='  p-16 w-[450px] m-auto rounded-md '  style={{background: 'rgba(0, 0, 0, 0.7)'}}>

        <div>
        <h1 className=' text-3xl font-medium mb-6'>Sign in</h1>
        <div className=' '>
            <input className='bg-transparent px-5 py-3 rounded-md bg-[#333] w-full mb-4'  onChange={(e) => setUser({...user, email: e.target.value})} placeholder='Email or phone number'/> 
            <input className='bg-transparent px-5 py-3 rounded-md bg-[#333] w-full mb-4' onChange={(e) => setUser({...user, password: e.target.value})} placeholder='Password'/>
            <button className='font-semibold rounded-[4px] bg-[#e50914] w-full  p-3' onClick={onLogin} >Sign In</button>
            <div className='flex justify-between items-center mt-3 '>
                <label className=' '><input type='checkbox' className='  bg-[#333] h-4 w-4' placeholder='dffd'/> Remember me</label>
                <a href='#'>Need help?</a>
            </div>
          
        </div>

        </div>
        <div className='my-20 '>
            <p className='text-[#8c8c8c]'>New to Netflix?<a className='text-[#ffffff]'> Sign up now.</a></p>
            <p className=' text-xs text-[#8c8c8c] mt-5'>This page is protected by Google reCAPTCHA to ensure you are not a bot.<a className='text-[#3942c3]'> Learn more.</a> </p>
        </div>
        
        
      </div>
    
  </div>

    </div>
    </>
  )
}

export default Login
