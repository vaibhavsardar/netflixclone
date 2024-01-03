import React from "react";

const Banner = () => {
  return <>

    <div className=' flex mx-auto max-w-[79%] justify-center items-center py-[72px]'>
      <div className=' basis-1/2'>
      <h1 className=' text-5xl font-extrabold'>Enjoy on your TV</h1>
      <p className=' text-2xl mt-6'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className=' basis-1/2'>
      <img src="/images/tv.png" className="  " alt="tv" /> 

      </div>
    </div>

    <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>


    <div className=' flex flex-row-reverse mx-auto max-w-[79%] justify-center items-center py-[72px]'>
      <div className=' basis-1/2'>
      <h1 className=' text-5xl font-extrabold'>Download your shows to watch offline</h1>
      <p className=' text-2xl mt-6'>Save your favourites easily and always have something to watch.</p>
      </div>
      <div className=' basis-1/2'>
      <img src="/images/mobile.jpg" className="  " alt="tv" /> 

      </div>
    </div>

    <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>


  

    <div className=' flex  mx-auto max-w-[79%] justify-center items-center py-[72px]'>
      <div className=' basis-1/2'>
      <h1 className=' text-5xl font-extrabold'>Watch everywhere</h1>
      <p className=' text-2xl mt-6'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className=' basis-1/2'>
      <img src="/images/device-pile-in.png" className="  " alt="tv" /> 

      </div>
    </div>

    <div className=" w-full h-2 bg" style={{backgroundColor : 'rgb(35,35,35)'}}></div>


    <div className=' flex flex-row-reverse mx-auto max-w-[79%] justify-center items-center py-[72px]'>
      <div className=' basis-1/2'>
      <h1 className=' text-5xl font-extrabold'>Create profiles for kids</h1>
      <p className=' text-2xl mt-6'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
      </div>
      <div className=' basis-1/2'>
      <img src="/images/children.png" className="  " alt="tv" /> 

      </div>
    </div>
  
  </>;
};

export default Banner;
