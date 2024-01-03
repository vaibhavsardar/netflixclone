"use client";
// import { motion } from "framer-motion";
// import MuiModal from "@mui/material/Modal";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { AiFillPlayCircle } from "react-icons/ai";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import { setModelData } from '@/redux/features/itemModelSlice';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getSimilarTVorMovies, getTVorMovieVideosByID } from "@/utils/getMedias";
import MediaItem from "./MediaItem";


const ItemPopup = () => {

  const dispatch = useDispatch();
  const [key, setKey] = useState(null);
  const [similarMedias, setSimilarMedias] = useState(null);



  const stateData = useSelector((state) => {console.log("model",state.itemmodel); return state.itemmodel})

  const [open, setModelOpen] = React.useState(false);
  const handleOpen = () => setModelOpen(true);
  const handleClose = () => dispatch(setModelData({isOpen:false}));

  useEffect(() => {
    async function getMediaDetails() {
      const extractMediaDetails = await getTVorMovieVideosByID(
        stateData.type,
        stateData.currId
      );

      const extractSimilarMovies = await getSimilarTVorMovies(
        stateData.type,
        stateData.currId
      );


      console.log("similar",extractSimilarMovies)
      setSimilarMedias(extractSimilarMovies);

      


      if (extractMediaDetails) {
        const findIndexOfTrailer = extractMediaDetails?.results?.findIndex(
          (item) => item.type === "Trailer"
        );

        const findIndexOfClip = extractMediaDetails?.results?.findIndex(
          (item) => item.type === "Clip"
        );

        // setMediaDetails(extractMediaDetails);
        setKey(
          findIndexOfTrailer !== -1
            ? extractMediaDetails[findIndexOfTrailer]?.key
            : findIndexOfClip !== -1
            ? extractMediaDetails[findIndexOfClip]?.key
            : "XuDwndGaCFo"
        );

      }

      

      // console.log(extractMediaDetails);
    }

    getMediaDetails();
  }, [stateData]);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
       {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={stateData.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="fixed !top-7 left-0 right-0 z-50 w-full mx-auto max-w-5xl overflow-hidden overflow-y-scroll rounded-md no-scrollbar"

      >
        <Box >
        <button
            onClick={handleClose}
            className="modalButton flex items-center justify-center absolute top-5 right-5 bg-[#181818] hover:bg-[#181818] !z-40 border-none h-9 w-9"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${key}`}
              width={"100%"}
              height={"100%"}
              style={{ position: "absolute", top: "0", left: "0" }}
              playing
              controls
            />
            <div className="absolute bottom-[4.25rem] flex w-full items-center justify-between pl-[1.5rem]">
              <div>
                <button
                  onClick={() =>
                    router.push(
                      `/watch/${stateData?.type}/${stateData?.currId}`
                    )
                  }
                  className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black"
                >
                  <AiFillPlayCircle className="h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer" />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-b-md bg-[#181818] p-8">
            <div className="space-x-2 pb-4 flex gap-4">
              <div className="text-green-400 font-semibold flex gap-2">
                <span>
                  {/* {mediaDetails?.release_date
                    ? mediaDetails?.release_date.split("-")[0]
                    : "2023"} */}
                </span>
                <div className="inline-flex border-2 border-white/40 rounded px-2">
                  HD
                </div>
              </div>
            </div>
            <h2 className="mt-10 mb-6 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
              More Like This
            </h2>
            <div className="grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2">
              {similarMedias && similarMedias.length
                ? similarMedias
                    .filter(
                      (item) =>
                        item.backdrop_path !== null && item.poster_path !== null
                    )
                    .map((mediaItem) => (
                      <MediaItem
                        key={mediaItem.id}
                        media={mediaItem}
                        similarMovieView={true}
                        type={stateData?.type}
                      />
                    ))
                : null}
            </div>
          </div>
          
        </Box>
      </Modal>
      
    </div>
  )
}

export default ItemPopup;
