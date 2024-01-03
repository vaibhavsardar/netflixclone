'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import {
    PlusIcon,
    ChevronDownIcon,
    CheckIcon,
  } from "@heroicons/react/24/outline";
  import {  useRouter } from "next/navigation";
  import { useDispatch, useSelector } from 'react-redux';
import { setModelData, setOpen } from '@/redux/features/itemModelSlice';
import axios from 'axios';
import { setMylist } from '@/redux/features/mylistSlice';



const MediaItem = ({
    media,
    searchView = false,
    similarMovieView = false,
    listView = false,
    title,
    type
  }) => {
    const router = useRouter();
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const dispatch = useDispatch();
    const user = useSelector((state) => { return state.authuser.user})
    const myList = useSelector((state) => { return state.mylist.mylist});
    const [addedToMylist,setAddedtoMylist] = useState('')
    const [add,setAdd] = useState('')


    useEffect(()=>{

      let result = myList?.map(i => i.mediaId);
      console.log("id",result?.includes(media.id),add);
      setAddedtoMylist(result?.includes(media.id));

    },[myList]);



    const addList = async () => {
      try {
          const response = await axios.post("/api/users/addmylist", {"_id":user._id,type,"mediaId":media?.id});
          setAdd(response.data);
          console.log("add lis success", response.data);          
      } catch (error) {
          console.log("add list failed", error.message);

          alert(error.message)
          
          // toast.error(error.message);
      }
  }

  return (
    <>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="relative cardWrapper   cursor-pointer  md:min-w-[170px] transform transition duration-500 hover:scale-110 hover:z-[999]">
        <img
          src={`${baseUrl}${media?.poster_path|| media?.backdrop_path}`}
          alt="Media"
          layout="fill"
          className=" h-full w-full  rounded sm  md:rounded hover:rounded-sm"
          onClick={() =>
            router.push(`/watch/${type}/${ media?.id}`)
          }
        /> 
        <div className="space-x-3 hidden absolute p-2 bottom-0 buttonWrapper">
          <button onClick={ () =>{
            addedToMylist ? alert('already added') : addList();
            
          } }
            // onClick={
            //   media?.addedToFavorites
            //     ? listView
            //       ? () => handleRemoveFavorites(media)
            //       : null
            //     : () => handleAddToFavorites(media)
            // }
            className={` cursor-pointer border flex p-2 items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90 border-white   bg-black opacity-75 text-black`}
          >
            {addedToMylist ? (
              <CheckIcon color="#ffffff" className="h-7 w-7" />
            ) : (
              <PlusIcon color="#ffffff" className="h-7 w-7" />
            )}
          </button>
          <button
            onClick={() => {
              dispatch(setModelData({isOpen:true,type:type,currId:media?.id}));
              // setShowDetailsPopup(true);
              // setCurrentMediaInfoIdAndType({
              //   type: media?.type,
              //   id: listView ? media?.movieID : media?.id,
              // });
            }}
            className="cursor-pointer p-2 border flex items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90  border-white  bg-black opacity-75 "
          >
            <ChevronDownIcon color="#fffffff" className="h-7 w-7" />
          </button>
        </div>
      </div>
    </motion.div>

      
    </>
  )
}

export default MediaItem;
