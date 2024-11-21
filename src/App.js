import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Project from './components/Project';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Experience/>
            <Projects/>
            <AboutMe/>
            <Technologies/>  
          </>  
        }
        />
        <Route path="/proyecto/:projectId" element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
 
export default App;
