import React, { useState, useEffect } from 'react';
// import Profile from "../images/IMG_1652.jpg"
import {Link} from 'react-router-dom'


function Aboutme() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div  className="mb-10 justify-center items-center ">
  <div class="flex justify-center items-center mb-10">
  <img alt="Instagram" src="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/49784199_284667822235972_507044503022993408_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AGgrxCIH0KYAX9YRGWY&_nc_ht=scontent-atl3-2.xx&oh=00_AfAhlaJ2QLKXcvWOdKOlEccCr0f3_ermNJsMLoIy3HGupg&oe=648273CA" class="w-7/12 h-3/12 rounded-full mx-auto">
    </img>.
</div>


           
      {/* <div id="header" className="section bg-transparent ">
             <img alt="logo" className="img-circle animate-[wiggle_1s_ease-in-out_infinite]" src={Profile}/>  
        </div> */}
    <h1 id="aboutme" ><span className='bg-[#0369A1]'>About Us</span></h1>
    
    <div className='bg-[#0369A1] border-8 border-gray-500 rounded-md mt-10 m-auto sm:w-5/6'>
        <div className='text-white font-bold p-8' id="aboutmewords"><p className='text-[1rem] break-words text-center text-white'>AnitaMaid is a premier maid and property management service provider based in the Metro Atlanta area. Founded in 2019 by Daniela and Darrell Thomas, with a passion for excellence, AnitaMaid has quickly gained a reputation for delivering exceptional services to its primary short-term rental clients.<br></br><br></br>At AnitaMaid, we understand that our clients' properties require top-notch care and maintenance, and we are committed to providing just that. Our team of experienced professionals is dedicated to delivering top-quality cleaning services that exceed our clients' expectations. From regular cleaning to deep cleaning, we ensure that every inch of our clients' properties is spotless and well-maintained.<br></br><br></br>Our property management services are designed to help our clients manage their properties efficiently and effectively. We take care of everything from guest communication and booking management to property maintenance and inspection. Our team ensures that our clients' properties are always in top shape, ready for the next guest to arrive.<br></br><br></br>At AnitaMaid, we pride ourselves on our commitment to providing exceptional customer service. We take the time to understand our clients' unique needs and tailor our services to meet those needs. With our attention to detail and dedication to excellence, we have become the go-to maid and property management service provider for short-term rental clients in the Metro Atlanta area.<br></br><br></br>Choose AnitaMaid for all your maid and property management needs, and experience the peace of mind that comes with knowing your property is in good hands.<br></br><br></br><Link className="active" to='/request'>Click Here to Request Cleaning</Link></p></div>
    </div>
    </div>
  );
}

export default Aboutme;
