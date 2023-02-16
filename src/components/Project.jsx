import React, { useState,useEffect } from 'react';



// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
      setIsVisible(true);
    }, []);
    return (
      <div  className="mt-40 justify-center items-center">
        {/* <div id="header" className="section bg-transparent ">
               <img alt="logo" className="img-circle animate-[wiggle_1s_ease-in-out_infinite]" src={Profile}/>  
          </div> */}
      <h1 id="aboutme" ><span className='bg-[#0369A1]'>About Us</span></h1>
      
      <div className='bg-[#0369A1] border-8 border-gray-500 rounded-md mt-10 m-auto sm:w-2/6 '>
          <div className='text-white font-bold p-8' id="aboutmewords"><p className='text-[1rem] break-words text-center text-white'>jhjhdsfdsfdsfdsfdsfdsfdcdsfesdfsdfdsffwefsdfdsfe<br></br>swfsffdsffdfdssdsdsadfdsfdsfdsfdsffdsfdsfds<br></br>fdsfdsefdfdsfdsfdsfdsfdsf<br></br>dsfdsfsdsdfdsfsdfsdfdsfdsfdsfd<br></br>sffsdfdsdasdasdasdasdasdsadasdsadddsdfdsfwefsadfdj</p></div>
      </div>
      </div>
    );
}

export default Card;
