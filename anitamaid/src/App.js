import React from 'react';
import Main from './components/Main';
import{BrowserRouter} from 'react-router-dom'
import BackgroundVideo from './components/BackgroundVideo';
import './index.css';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
   
    <div>
      < BackgroundVideo></BackgroundVideo>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;