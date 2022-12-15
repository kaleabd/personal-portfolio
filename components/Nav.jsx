import React from 'react'
import Menu from '../assets/menu.svg'
import Coin from '../assets/tip.svg'

function Nav() {
  return (
    <div className='flex justify-between mx-2 my-4 lg:mx-24 lg:my-10 items-center relative z-50'>
          <div className="dropdown dropdown-hover  dropdown-center fixed lg:top-5 top-5 lg:right-12 right-5 dark:bg-main dark:rounded-full dark:p-[.2rem]">
              <label tabIndex={0} className="animate-bounceInDown m-1  flex"><img src={Menu} alt="/" className='lg:w-10 lg:h-10 w-6 h-6 dark:scale-75  '/></label>
              <ul tabIndex={0} className="dropdown-content bg-[#F37F14] text-white menu p-4  transform lg:translate-x-[-70%] md:translate-x-[-70%] translate-x-[-65%] dark:stranslate-y-4 shadow rounded-md drop-shadow-xl w-52">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
              </ul>
            </div>
            <a className='bg-[#F37F14] px-4 py-2 lg:scale-100 scale-75 rounded-lg shadow-lg active:translate-y-1 flex items-center justify-between' href='https://app.kijam.io/kaleab'  target="_blank">
              <img src={Coin} alt="coin icon" className='w-5 h-5 mr-2'/>
              <h1 className='text-white font-semibold'>Tip me</h1>
            </a>
            
        </div>
  )
}

export default Nav
