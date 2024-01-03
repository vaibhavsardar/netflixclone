import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='  py-12 px-16'>
      <div className='flex  items-center gap-10'>
        <BiLogoFacebook className='w-8 h-8'/>
        <AiOutlineInstagram  className='w-8 h-8'/>
        <BsTwitter className='w-8 h-8'/>
        <BsYoutube className='w-8 h-8'/>
      </div>
      <div className='flex items-center justify-between text-lg mt-5'>
        <div className='flex flex-col gap-2 '>
          <Link href='/'>Audio and Subtitles</Link>
          <Link href='/'>Media Centre</Link>
          <Link href='/'>Privacy</Link>
          <Link href='/'>Contact Us</Link>
            
        </div>
        <div className='flex flex-col gap-2'>
          <Link href='/'>Audio Description </Link>
          <Link href='/'>Investor Relations </Link>
          <Link href='/'>Legal Notices </Link>
            
        </div>
        <div className='flex flex-col gap-2'>
          <Link href='/'>Help Centre </Link>
          <Link href='/'>Jobs </Link>
          <Link href='/'>Cookie Preferences </Link>
            
        </div>
        <div className='flex flex-col gap-2 basis-1/4'>
          <Link href='/'>Gift Cards </Link>
          <Link href='/'>Terms of Use </Link>
          <Link href='/'>Corporate Information </Link>
          
        </div>
        

      </div>
    </div>
  )
}

export default Footer
