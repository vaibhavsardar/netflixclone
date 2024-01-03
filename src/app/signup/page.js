'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Signup from '@/components/Signup'

import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '@/redux/features/counterSlice';
import { setAuthuser } from '@/redux/features/userSlice';
const page = () => {
  return(<>
    <Signup/>
  </> )

   
}

export default page