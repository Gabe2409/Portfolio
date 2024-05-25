import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import About from './src/pages/about'
import Contact from './src/pages/contact'
import Services from './src/pages/services'
import Project from './src/pages/projects'
//import MainLayout from './components/MainLayout'


const MainRouter = () => {
        return (<div>
                
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />    
                        <Route exact path="/contact" element={<Contact />} />    
                        <Route exact path="/services" element={<Services />} />    
                        <Route exact path="/projects" element={<Project />} />    
                        
                </Routes>
        </div>
        )
}
export default MainRouter




