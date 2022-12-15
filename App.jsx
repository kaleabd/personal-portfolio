import React from 'react'
import Data from "./Data"
//importing components here
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <div class="font-raleway snap-y snap-mandatory w-full h-screen overflow-scroll overflow-x-hidden scroll-smooth lg:scrollbar-w-2 scrollbar-w-1 scrollbar-thumb-main scrollbar-track-white">
      <div className="snap-start h-screen w-full flex flex-col ">
        <Nav />
        <Hero />
      </div>
      <div class="snap-start h-screen w-full flex items-center justify-center" id="about">
        <About />
      </div>
      <div className='snap-start h-screen flex relative' id="projects">
        <Projects />
      </div>
      <div class="snap-start h-screen flex items-center justify-center lg:justify-between lg:mx-24 md:mx-0" id="contact">
        <Contact />
      </div>
      <div className="snap-start h-[10%] w-full flex bg-[#F37F14]">
        <Footer />
      </div>
      </div>
    </>
    
  )
}

export default App
