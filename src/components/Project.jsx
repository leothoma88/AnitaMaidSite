import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'


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
      <div  className="mt-20 mb-10 justify-center items-center">
        {/* <div id="header" className="section bg-transparent ">
               <img alt="logo" className="img-circle animate-[wiggle_1s_ease-in-out_infinite]" src={Profile}/>  
          </div> */}
      <h1 id="aboutme" ><span className='bg-[#0369A1]'>Vacation Rental Managment Section</span></h1>
      
      <div className='bg-[#0369A1] border-8 border-gray-500 rounded-md mt-10 m-auto sm:w-5/6 '>
          <div className='text-white font-bold p-8' id="aboutmewords"><p className='text-[1rem] break-words text-center text-white'><br></br>AnitaMaid Property Management offers comprehensive management services, including property listing, pricing optimization, guest communication, and maintenance. With a focus on customer satisfaction and attention to detail, Daniela and her team ensure that every rental property under their management is maintained to the highest standards. Contact AnitaMaid Property Management today to experience the benefits of having a trusted partner in property management.<br></br><br></br><Link className="active" to='/request'>Click Here to Request Cleaning</Link></p></div>
      </div>
      </div>
    );
}

export default Card;
