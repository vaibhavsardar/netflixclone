'use client'
import { increment } from '@/redux/features/counterSlice';
import { setMylist } from '@/redux/features/mylistSlice';
import { setAuthuser } from '@/redux/features/userSlice';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Datacomp = () => {
    // const dispatch = useDispatch();
  // const count = useSelector((state) => {console.log("rrrmainn",state.authuser); return state.counter.value})
  const myList = useSelector((state) => { return state.mylist.mylist});


  const dispatch = useDispatch();

  const [userdata,setUserdata] = useState({});

  console.log("userdata",userdata);

  useEffect(()=>{

    const getUserDetails = async () => { 
      try {
        const res = await axios.get('/api/users/me')
        console.log("res main",res.data.user._id);
        setUserdata({"email":res.data.user.email,"token":res.data.user.token}); 
        dispatch(setAuthuser({isloggedin:true,user:{"_id":res.data.user._id,"email":res.data.user.email,"token":res.data.user.token}}));

      } catch (error) {
        console.log("res mainerrr");
        dispatch(setAuthuser({isloggedin:false,user:null}));


      }
     
  }

  const getPlanDetails = async () => { 
    try {
      const res = await axios.get('/api/users/getplan')
      console.log("get plan",res.data.plan);
      // setUserdata({"email":res.data.user.email,"token":res.data.user.token}); 
      // dispatch(setAuthuser({isloggedin:true,user:{"_id":res.data.user._id,"email":res.data.user.email,"token":res.data.user.token}}));

    } catch (error) {
      console.log("get plan failed");
      // dispatch(setAuthuser({isloggedin:false,user:null}));


    }
   
}


   getUserDetails();
  //  getPlanDetails();
  },[]);



  useEffect(()=>{

    const getListdata = async () =>{

      try {
          const resp = await axios.get('/api/users/getmylist')
          // setMylist(resp.data.mylist.listarray)
          console.log(resp.data.mylist.listarray);
          dispatch(setMylist({mylist:resp.data.mylist.listarray}))
       } catch (error) {
          console.log(error);
       }
    }
    getListdata();

  },[])

  return (
    <>
        
    </>
  )
}

export default Datacomp;
