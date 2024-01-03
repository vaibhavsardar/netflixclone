import Link from 'next/link'
import React from 'react'
import { BiSolidBell } from "react-icons/bi";
import { useSelector } from 'react-redux';
import ItemPopup from './ItemPopup';
import { AiFillCaretDown } from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [query,setQuery] = React.useState('');
  const router = useRouter();

//   const {isloggedin,token,user} = useSelector((state) =>{  console.log("rrr",state.authuser)
//    return state.authuser 
// })

  return (
    <>
     <div className=' flex  py-4 justify-between items-center gap-8' >
        <div className='flex gap-8 items-center'>
          <img src="/images/logo.png" className=" h-8  ml-0" alt="Logo" /> 
          <div className='flex gap-6'>
            <Link href='/browse'>Home</Link>
            <Link href='/tv'>TV Shows{}</Link>
            <Link href='/movie'>Movies</Link>
            <Link href='/'>New and Popular</Link>
            <Link href='/favourite'>My list</Link>
            <ItemPopup/>
            
          </div>       
        </div>
       
      
        <div className='flex items-center justify-between gap-4'>
            <div className='border border-white'><input className=' px-5 py-1  bg-black w-full ' placeholder='Movie,tv,etc.' onChange={(e) => setQuery(e.target.value)}  /> </div>
            <FiSearch onClick={()=> router.push(`/search/${query}`)}  className='w-6 h-6'/>
            <BiSolidBell className='w-6 h-6' />
            <Link href={'/account'}><img  className='w-10 h-10 rounded-md' src='/images/profile3.jpg'/></Link>
            <AiFillCaretDown/>
            

        </div>
      
      </div>
      
    </>
  )
}

export default Navbar
