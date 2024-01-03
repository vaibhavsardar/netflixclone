import React from 'react'
import {IoMdAddCircle} from 'react-icons/io'
const Account = () => {
  return (
    <div>
      <div className='p-5'><img className='h-14 ' src='/images/logo.png'/></div>
      <div className='flex flex-col items-center justify-center h-96 text-center '>
            <h1 className=' text-3xl font-medium'> Who is  watching ?</h1>
            <div className='flex justify-center items-center gap-5 mt-6 '>
              <div>
                <img className='w-28  h-28 rounded-md' src='/images/profile1.png'/>
                <p className=' text-center p-2'>Name</p>
              </div>
              <div>
                <img className='w-28  h-28 rounded-md' src='/images/profile2.jpg'/>
                <p className=' text-center p-2'>Name</p>
              </div>
              <div>
                <img  className='w-28  h-28 rounded-md' src='/images/profile3.jpg'/>
                <p className=' text-center p-2'>Name</p>
              </div>
              <div>
                <img  className='w-28  h-28 rounded-md' src='/images/profile4.png'/>
                <p className=' text-center p-2'>Name</p>
              </div>
              <div>
                <IoMdAddCircle className=' text-slate-600 w-28  h-28 pb-6'/>
              </div>

            </div>
      </div>
      <div className='flex justify-center items-center'><button className=' border border-slate-400 text-slate-400 p-2 rounded-sm'>Manage Profiles</button></div>
        
      
    </div>
  )
}

export default Account
