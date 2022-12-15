import React from 'react'
import Down from '../assets/down.svg'

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen " id="home">
                    <div className="flex flex-col items-center w-max h-full justify-center hover:cursor-pointer hover:scale-105 transition ease-in-out duration-300" >
                        <h1  className="animate-slideInLeft text-center font-bold lg:text-[3.5rem] md:text-[3rem] text-[2.2rem]  flex items-center lg:flex-row md:flex-row flex-col"><section className='font-hello font-light lg:mx-4 mx-0 text-[#F37F14] lg:text-[4rem] md:text-[3.5rem]  '>Hello,</section> I'M Kaleab Dereje.</h1>
                        <p className="animate-slideInRight  text-center lg:text-[1.2rem] md:text-[1.1rem] text-[.85rem] tracking-widest ">Website Developer & Graphics, Ui/Ux Designer</p>
                    </div>
                    <div className="flex flex-col items-center justify-center animate-bounce lg:my-16 my-20">
                        <a href="#about"><img src={Down} alt="down arrow " className="w-10 h-10 animate-bounce animate-infinite animate-duration-[2.5s]" /></a>
                    </div>
                    
        </div>
  )
}

export default Hero
