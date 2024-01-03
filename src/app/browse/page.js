"use client"
// import Itemrow from '@/components/Itemrow'
import Navbar from '@/components/Navbar'
import Poster from '@/components/Poster'
import Footer from '@/components/Footer'
import React, { lazy, Suspense,useEffect, useState } from 'react';
const Itemrow = lazy(() => import('@/components/Itemrow'));
import { motion } from 'framer-motion';

import axios from "axios";
import {getMedias,getTrendingMedias,getTopratedMedias, getPopularMedias, getNowPlayingMedias, getTVorMoviesByGenre}  from '@/utils/getMedias'

import {bollywood}  from '@/apiURL'


const Page = () => {


  const [mdata,setMdata] = useState([]);
  // const [mdata2,setMdata2] =useState([]);
  // const [mdata3,setMdata3] =useState([]);
  // const [mdata4,setMdata4] =useState([]);


  // getPopularMedias("movie").then((res)=> setMdata([...mdata,{"title":"Popular on Netflix","content":res}]));
  // getTrendingMedias("movie").then((res)=> setMdata([...mdata,{"title":"tre","content":res}]));
  // getNowPlayingMedias("movie").then((res)=> setMdata([...mdata,{"title":"now","content":res}]));
 
  //    getMedias(bollywood).then((res)=> setMdata([...mdata,{"title":"Bollywood Movies","content":res}]));
     
  useEffect(()=>{

    const loadMedias = async () =>{
      const popall =[]

      for (let i = 1; i <= 5; i++) {
        const popularMedias = await  getPopularMedias("movie",i);
        popall.push(...popularMedias)
      }
      
      const trendingMedias = await  getTrendingMedias("movie");
      const nowplayingrMedias = await  getNowPlayingMedias("movie");
      const bollywoodMedias = await  getMedias(bollywood);
      const scifiAndFantasy = await getTVorMoviesByGenre("movie", 878);
      const amimeMedias = await  getTVorMoviesByGenre("movie",16);
      const drama = await getTVorMoviesByGenre("tv", 18);

      const actionmovieMedias = await  getTVorMoviesByGenre("movie",28);




      setMdata([
        {"title":"Popular on Netflix", 'type':"movie","content":popall},
        {"title":"Trending Now", 'type':"movie","content":trendingMedias},
        {"title":"New Releases",'type':"movie","content":nowplayingrMedias},
        {"title":"Animations",'type':"movie","content":amimeMedias},
        {"title":"Science and Fantasy",'type':"movie","content":scifiAndFantasy},
        {"title":"Bollywood Movies",'type':"movie","content":bollywoodMedias},
        {"title":"Action Movies",'type':"movie","content":actionmovieMedias},
        {"title":"TV Drama",'type':"tv","content":drama},


      ]);


  // console.log("mmm")

    }


    loadMedias();

    
    

      //  getMedias(bollywood).then((res)=> setMdata([...mdata,{title:"Bollywood Moviesl",content:res}]));
      // setMdata([...mdata,{"title":"Bollywood Movies","content":"hvhv"}])
     
      //getTVorMoviesByGenre("tv",16).then((res)=> setMdata4(res))

     

  },[])

 

  console.log("test ,",mdata[0]);

  return (
    // <div className='mx-auto max-w-[95%] '>
    // <Navbar/>

    // {mdata.map((i)=> { console.log("iiii",i.title); return  <Itemrow title={i.title} type={i.type} idata ={i.content} page={'browse'}/> })}
  
    // </div>

<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
>


<div className='mx-auto max-w-[95%] '>
  <Navbar />
  </div>
  <div className="relative  pb-24 lg:space-y-24">
    <Poster medias={mdata} />
    <section className="md:space-y-16 px-3">
      {mdata && mdata.length
        ? mdata.map((i,ind) => (
          <Itemrow key ={ind+Math.random()} title={i.title} type={i.type} idata ={i.content} /> 
          ))
        : null}
    </section>
  </div>
  <Footer/>
</motion.div>
  )
}

export default Page
