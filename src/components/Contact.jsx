import React, { useState,useEffect } from 'react';



function Contact() {

    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
      setIsVisible(true);
    }, []);
    return (
      <div  className="mt-30 mb-10 justify-center items-center">
        {/* <div id="header" className="section bg-transparent ">
               <img alt="logo" className="img-circle animate-[wiggle_1s_ease-in-out_infinite]" src={Profile}/>  
          </div> */}
      <h1 id="aboutme" ><span className='bg-[#0369A1]'>Cleaning Services</span></h1>
      
      <div className='bg-[#0369A1] border-8 border-gray-500 rounded-md mt-10 m-auto sm:w-2/6 '>
          <div className='text-white font-bold p-8' id="aboutmewords"><p className='text-[1rem] break-words text-center text-white'><br></br>AnitaMaid is proud to serve the Airbnb and VRBO community in Atlanta, GA and surrounding areas!

When you trust us to handle your vacation rental, it will be cleaned till it's spotless everytime! You can even automate your cleanings so that you can sit back and relax while we handle your rental.<br></br><br></br> In addition to cleaning, we also provide laundry service, upholstery cleaning, restocking and co hosting services! 

Our Airbnb and VRBO vacation rental cleaning service is all-inclusive. We will leave your rental in immaculate condition, ensuring a five-star review from your next guest!<br></br></p></div>
      </div>
      </div>
    );
}
    
export default Contact