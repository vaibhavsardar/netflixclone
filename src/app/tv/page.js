"use client"
import Itemrow from '@/components/Itemrow'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import {getMedias,getTrendingMedias,getTopratedMedias, getPopularMedias, getNowPlayingMedias, getTVorMoviesByGenre}  from '@/utils/getMedias'

import {bollywood}  from '@/apiURL'

import Poster from '@/components/Poster'
import { motion } from 'framer-motion';

const Tv = () => {


  const [tvmdata,settvMdata] = useState([]);


  useEffect(()=>{

    const loadtvMedias = async () =>{

      const drama = await getTVorMoviesByGenre("tv", 80);
      const popularMedias = await  getPopularMedias("tv");
      const trendingMedias = await  getTrendingMedias("tv");
      const nowplayingrMedias = await  getNowPlayingMedias("movie");
    //   const bollywoodMedias = await  getMedias(bollywood);
    //   const scifiAndFantasy = await getTVorMoviesByGenre("movie", 878);
      const amimeMedias = await  getTVorMoviesByGenre("tv",16);

    //   const actionmovieMedias = await  getTVorMoviesByGenre("movie",28);




      settvMdata([
        {"title":" Crime TV Dramas",'type':"tv","content":drama},
        {"title":"Popular on Netflix",'type':"tv","content":popularMedias},
        {"title":"Trending Now",'type':"tv","content":trendingMedias},
        {"title":"New Releases",'type':"tv","content":nowplayingrMedias},
        {"title":"Animations",'type':"tv","content":amimeMedias},
        // {"title":"Science and Fantasy","content":scifiAndFantasy},
        // {"title":"Bollywood Movies","content":bollywoodMedias},
        // {"title":"Action Movies","content":actionmovieMedias},


      ]);

    }


    loadtvMedias();

  },[])

 


  return (
    // <div className='mx-auto max-w-[95%] '>
    // <Navbar/>
    // {tvmdata.map((i)=> { console.log("iiii",i.title); return  <Itemrow title={i.title} type={'tv'} idata ={i.content}/> })}
    // </div>


    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    >
    
    <>
    <div className='mx-auto max-w-[95%] '>
      <Navbar />
      </div>
      <div className="relative  pb-24 lg:space-y-24">
        <Poster
          medias={tvmdata}
        />
        <section className="md:space-y-16 px-3">
          {tvmdata && tvmdata.length
            ? tvmdata.map((i,ind) => (
              <Itemrow key={ind}title={i.title} type={i.type} idata ={i.content} /> 
              ))
            : null}
        </section>
      </div>
      
    </>
    </motion.div>
  )
}

export default Tv
