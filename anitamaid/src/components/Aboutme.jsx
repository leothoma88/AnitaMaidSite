import React, { useState, useEffect } from 'react';
// import Profile from "../images/IMG_1652.jpg"


function Aboutme() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div  className="mt-40 justify-center items-center">
      {/* <div id="header" className="section bg-transparent ">
             <img alt="logo" className="img-circle animate-[wiggle_1s_ease-in-out_infinite]" src={Profile}/>  
        </div> */}
    <h1 id="aboutme" className='animate-pulse'><span className='bg-blue-700'>About Us</span></h1>
    
    <div className='w-auto h-1/2 sm:w-1/2 sm:h-1/2 m-auto bg-white  flex justify-center items-center'>
        <div className='text-black font-bold p-8' id="aboutmewords"><p className='text-[1rem] word-break text-center text-black'>jhjhdsfdsfdsfdsfdsfdsfdcdsfesdfsdfdsffwefsdfdsfe<br></br>swfsffdsffdfdssdsdsadfdsfdsfdsfdsffdsfdsfds<br></br>fdsfdsefdfdsfdsfdsfdsfdsf<br></br>dsfdsfsdsdfdsfsdfsdfdsfdsfdsfd<br></br>sffsdfdsdasdasdasdasdasdsadasdsadsadfdj</p></div>
    </div>
    </div>
  );
}

export default Aboutme;
