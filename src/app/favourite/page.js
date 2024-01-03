"use client"
import Itemrow from '@/components/Itemrow'
import Navbar from '@/components/Navbar'
import Poster from '@/components/Poster'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion';


import React, { lazy, Suspense,useEffect, useState } from 'react';
const MediaItem = lazy(() => import('@/components/MediaItem'));
import {bollywood}  from '@/apiURL'
import { useDispatch, useSelector } from 'react-redux'
import { getTVorMovieDetailsByID } from '@/utils/getMedias'
import axios from 'axios'
import { setMylist } from '@/redux/features/mylistSlice'
// import MediaItem from '@/components/MediaItem'


const Page = () => {


  const [mdata,setMdata] =useState([]);
  const [list,setList] =useState([]);
  const dispatch = useDispatch();

  const myList = useSelector((state) => {  return state.mylist.mylist});

  // setList(myList);

  useEffect(()=>{
   
    const arr =[];

    const getListdata = async () =>{
      console.log("mediaList in");
      try {
          const resp = await axios.get('/api/users/getmylist')
          // setMylist(resp.data.mylist.listarray)
          // console.log(resp.data.mylist.listarray);
          loadMedias(resp.data.mylist.listarray);
          setList([...resp.data.mylist.listarray])
          dispatch(setMylist({mylist:resp.data.mylist.listarray}))
       } catch (error) {
          console.log(error);
       }
    }
    

    const loadMedias = async (arrlist) =>{
      // console.log("test ,",arrlist);


        arrlist?.map(async (item) => {
        //   console.log("item",mediaList);
            //  const mediaData2 = await  getTrendingMedias("movie");

           const mediaData = await getTVorMovieDetailsByID(item?.type,item?.mediaId);

           arr.push(mediaData)

           setMdata([...arr]);

        });

       


        // setMdata([arr])

     

    }



   getListdata();

   


     

  },[])

 

console.log("mediaList out",myList?.length);

  return (
  
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
>


<div className='mx-auto max-w-[95%] '>
  <Navbar />
  </div>
  <div className='p-6'>
        <h2 className=" text-3xl mb-5  font-semibold text-[#e5e5e5]  hover:text-white md:text-2xl">My List</h2>

    <div className=" grid grid-cols-8 gap-3 ">
      
     {  
        mdata?.map((i,ind) => {
            // console.log("mdata resp",i);
            return <div key={ind} className='h-64 w-32' > <MediaItem  media={i}  type={"movie"} /> </div>

        })
      }
    
     </div>
    </div>
  <Footer/>
</motion.div>
  )
}

export default Page
