import React from 'react';



// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div className="section" id="res">
            <h1 id="myworks"  className='animate-pulse'><span>My Work</span></h1>
                
           
    </div>
    
  );
}

export default Card;
