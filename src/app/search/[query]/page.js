'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getTVorMovieSearchResults } from '@/utils/getMedias';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import MediaItem from '@/components/MediaItem';

const page = () => {
    const params = useParams();
    const [mdata,setMdata] =React.useState([]);

    useEffect(()=>{
   
        const arr =[];
    
        const loadMedias = async () =>{
         
            const addPageResult =[]

            for (let i = 1; i <= 5; i++) {
                const mediaData = await getTVorMovieSearchResults("movie",params.query,i);
                  addPageResult.push(...mediaData)
            }
            
    
             
    
               setMdata(addPageResult);
            console.log("serarch data",mediaData);
    
    
    
         
    
        }
    
        loadMedias();
    
    
         
    
      },[])
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
            {/* <h2 className=" text-3xl mb-5  font-semibold text-[#e5e5e5]  hover:text-white md:text-2xl">My List</h2> */}
    
        <div className=" grid grid-cols-8 gap-3 ">
          
         {  
            mdata?.map((i) => {
                // console.log("mdata resp",i);
                return <div className='h-64 w-32' > <MediaItem media={i}  type={"movie"} /> </div>
    
            })
          }
        
         </div>
        </div>
      <Footer/>
    </motion.div>
  )
}

export default page;
