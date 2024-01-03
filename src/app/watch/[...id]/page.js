"use client";
import { getTVorMovieVideosByID } from "@/utils/getMedias";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Watch() {
  const [mediaDetails, setMediaDetails] = useState(null);
  const [key, setKey] = useState(null);

  const params = useParams();


  useEffect(() => {
    async function getMediaDetails() {
      const extractMediaDetails = await getTVorMovieVideosByID(
        params.id[0],
        params.id[1]
      );

      if (extractMediaDetails) {
        const findIndexOfTrailer = extractMediaDetails.results?.findIndex(
          (item) => item.type === "Trailer"
        );

        const findIndexOfClip = extractMediaDetails.results?.findIndex(
          (item) => item.type === "Clip"
        );

        setMediaDetails(extractMediaDetails);
        setKey(
          findIndexOfTrailer !== -1
            ? extractMediaDetails.results[findIndexOfTrailer]?.key
            : findIndexOfClip !== -1
            ? extractMediaDetails.results[findIndexOfClip]?.key
            : "XuDwndGaCFo"
        );

      }

      console.log(extractMediaDetails);
    }

    getMediaDetails();
  }, [params]);


  return (
   
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${key}`}
        width={"100%"}
        height={"100%"}
        style={{ position: "absolute", top: "0", left: "0" }}
        playing
        controls
      />
  );
}