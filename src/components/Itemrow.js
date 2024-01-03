import { getTVorMovieVideosByID } from '@/utils/getMedias';
import { useRouter } from 'next/navigation';
// import MediaItem from '@/components/MediaItem'

import React, { lazy, Suspense,useEffect, useState } from 'react';
const MediaItem = lazy(() => import('@/components/MediaItem'));

const Itemrow = ({title,type,idata}) => {

  const router = useRouter();

  const baseUrl = "https://image.tmdb.org/t/p/w500";
  // console.log("im data",idata)

   const getVideo = async (id,type) => {
    const API_KEY = "4729f8046d161c403075a83612cd6838";
    const BASE_URL = "https://api.themoviedb.org/3";
  
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&append_to_response=videos`,
        {
          method: "GET",
        }
      );
  
      const data = await res.json();

      // console.log('video',data && data.results)
  
      return data && data.results;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-50 space-y-0.5 md:space-y-2 px-4">
        <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">{title}</h2>
        <div className="group relative md:-ml-2">
        <div className='flex items-center gap-3 overflow-x-scroll no-scrollbar space-x-0.5  md:space-x-2.5 md:p-2'>
        {idata?.map((item,ind)=>{

          //  console.log('inside',item);

           return <MediaItem key={ind} media={item} title={title} type={type} />  

}         )}
          
        </div>
        </div> 
    </div>
  )
}

export default Itemrow
