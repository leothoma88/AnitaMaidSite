import React, { useState } from 'react';



function Footer() {
  
  return (

   

 
    <div className="bg-white backdrop-filter backdrop-blur-md  text-white py-6 h-95 border-t border-gradient-to-b from-gray-300 to-transparent" id="contacts">
        <h1 id="social" className='animate-pulse'><span className='bg-[#0369A1]'>QUESTIONS?</span></h1>
        <h1 id="social"><span className='bg-[#0369A1]'>Phone#: 470-826-3073</span></h1>

         <div className='justify-center flex flex-row '>
            <a href="https://www.instagram.com/anitamaidllc/?hl=en" target="_blank">
            <img alt="Instagram" src="https://img.icons8.com/cute-clipart/100/instagram-new.png"/>
            </a>
            <div className='justify-center flex flex-row'>
            <a href="https://www.facebook.com/ANITAMAIDLLC/" target="_blank">
            <img alt="Facebook" src="https://img.icons8.com/cute-clipart/100/facebook-new.png"/>
            </a>
            </div>
            <a href="mailto:anitamaidnow@gmail.com">
        <img src="https://img.icons8.com/fluent/95/000000/gmail--v2.png" alt='Gmail'/>
        </a>
              
        </div> 
    

    </div>

 
  );
}

export default Footer;