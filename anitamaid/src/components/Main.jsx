import React from 'react';
import Header from './Header';

import Navigation from './Navigation';
import Aboutme from './Aboutme';
import Project from './Project';
import Resume from './Resume';
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
        <Route path="/resume" element= {<Resume/>}/>
        </Routes>
        

    </React.Fragment>
    )
}

export default Main

