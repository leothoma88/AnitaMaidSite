import React from 'react';

import Logo from "../images/combatgif3.gif"
import Project1 from "../images/giveBack-homepage1.png" 
import Project2 from "../images/Screen Shot 2022-08-21 at 8.44.28 PM.png" 
import Project3 from "../images/Screen Shot 2023-01-12 at 8.47.42 PM.png"
import Project4 from "../images/pexels-photo-1187766.jpg"
import Project5 from "../images/pexels-photo-4297438.jpeg"
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div className="section" id="res">
            <h1 id="myworks"  className='animate-pulse'><span>My Work</span></h1>
                
             <div> 
              {/* <a className='hover:opacity-50' href="https://combat-arena-game.herokuapp.com/login"><img  id="first_project" src={Logo}   alt="Project Preview"/></a> */}
                <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
                  <div class="hover:opacity-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://giveback-app2.herokuapp.com/">
                      <img class="rounded-t-lg" src={Project1} alt=""/>
                    </a>
                    <div class="p-5">
                      <a href="https://giveback-app2.herokuapp.com/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GiveBack App</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Charity app that utilizes Charity.com API and uses MERN...</p>
                    <a href="https://giveback-app2.herokuapp.com/" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg ">
                    <p className='text-white text-xl font-bold'>Deploy App</p>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>
                  </div>
                  <div class="hover:opacity-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://shawnbandy.github.io/SwiftNews/">
                      <img class="rounded-t-lg" src={Project2} alt=""/>
                    </a>
                    <div class="p-5">
                      <a href="https://shawnbandy.github.io/SwiftNews/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Swift News</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Swift News is a easy to access news website that uses multiple APIs from the New York Times to display the most popular news, the top stories of today, and other news articles. The articles are presented as an easy-to-read format, with their image, abstract, and title displayed per article... </p>
                    <a href="https://shawnbandy.github.io/SwiftNews/" className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg ">
                    <p className='text-white text-xl font-bold'>Deploy App</p>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>
                  </div>
                  <div class="hover:opacity-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://github.com/leothoma88/CombatArena_Game">
                      <img class="rounded-t-lg" src={Logo} alt=""/>
                    </a>
                    <div class="p-5">
                      <a href="https://github.com/leothoma88/CombatArena_Game">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Combat Arena</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
This is a full-stack project making use of Node.js and Express.js, MySQL and Sequelize, Handlebars.js for templating, GET & POST routes for adding and retrieving data, and Passport as a means of storing user login information. This respository adheres to the MVC paradigm for its file/folder structure. The app is deployed to Heroku or it can be cloned and run locally. </p>
                    <a href="https://github.com/leothoma88/CombatArena_Game" className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg ">
                    <p className='text-white text-xl font-bold'>Deploy App</p>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>
                  </div>
                  <div class="hover:opacity-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://homechoice.herokuapp.com">
                      <img class="rounded-t-lg" src={Project3} alt=""/>
                    </a>
                    <div class="p-5">
                      <a href="https://homechoice.herokuapp.com">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">HomeChoice</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is a project that utilizes a Rapid API from US Real Estate to pull housing options for users then allowing them to calculate their mortage based on choices they choose in the housing survey they are provided. ... </p>
                    <a href="https://homechoice.herokuapp.com" className="inline-flex text-white items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg ">
                    <p className='text-white text-xl font-bold'>Deploy App</p>
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    </div>
                  </div>
                </div>
                <div className="columns">
                   
                </div>  
              </div>
    </div>
    
  );
}

export default Card;
