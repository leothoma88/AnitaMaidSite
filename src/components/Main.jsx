import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Navigation from './Navigation';
import Aboutme from './Aboutme';
import Project from './Project';
import Request from './Request';
import Contact from './Contact';
import {Routes,Route} from 'react-router-dom'







function Main(){
    return(  
    <React.Fragment>
        <Navigation/>
        
        <Header/>
        <Routes>
            
            <Route path="/" element= {<Aboutme/>}/>
            <Route path="/portfolio" element= {<Project/>}/>
            <Route path="/contact" element= {<Contact/>}/>
        <Route path="/request" element= {<Request/>}/>
        </Routes>
        <Footer/>
        

    </React.Fragment>
    )
}

export default Main

