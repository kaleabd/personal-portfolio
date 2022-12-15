import React from 'react'
import Aboutpic from '../assets/about.svg'
import CV from '../assets/cv11.pdf'

function About() {
  return (
    <div className = " grid lg:grid-cols-2 md:grid-flow-row items-start md:justify-start justify-center w-full h-full">
            <div className="  bg-[#F37F14] flex items-center justify-center">
                <img src={Aboutpic} alt="" className="lg:w-[700px] md:w-[50%] lg:h-screen h-auto no-image"/>
            </div>
            <div className="flex flex-col lg:ml-12 md:ml-0 mt-2">
                <div className=" lg:text-start text-center px-4 flex flex-col lg:justify-around lg:h-screen h-auto justify-center gap-[.85rem] lg:items-start items-center lg:mb-4" >
                    <div className="h-2 bg-[#F37F14] w-[25%]"></div>
                    <p className = "lg:text-[2.75rem] md:text-[1.5rem] font-bold md:mx-16 lg:mx-0">
                        I help businesses to convert their ideas into successful mobile applications and websites through strategy, creativity and technology.
                    </p>
                    <p className = "lg:text-[1.2rem] md:text-[1rem] text-[.8rem]  md:mx-24 lg:mx-0">
                    I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                    <div className='flex justify-between w-full lg:mb-2 mb-0 lg:mt-0 mt-4 items-center'>
                      <div className='bg-[#F37F14] px-4 py-2 text-lg text-white rounded-lg shadow-lg  transform hover:cursor-pointer active:translate-y-1 transition ease-in-out duration-300'>
                        <a href={CV} download >Download CV</a>
                      </div>
                      <div className='bg-[#F37F14] px-4 py-2 rounded-lg shadow-lg  text-lg text-white  transform hover:cursor-pointer active:translate-y-1 transition ease-in-out duration-300'>
                        <a className='hover:cursor-pointer' href="#contact">Get In Touch</a>
                      </div>
                      
                    </div>
                    
                </div>
          </div>
        </div>
  )
}

export default About
