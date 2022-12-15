import React from 'react'
import tg from '../assets/tg.svg'
import ig from '../assets/ig.svg'
import Ld from '../assets/linkedin.svg'
import tw from '../assets/tw.svg'
import git from '../assets/git.svg'

function Footer() {
  return (
    
      <footer className="footer grid grid-cols-2 justify-between lg:mx-24 md:mx-12 mx-2 flex-row w-full items-center text-white">
          <div className="items-center lg:grid-flow-col md:grid-flow-row">
            <p>Copyright © 2022 - Designed and Built by</p>
            <h1 className='font-bold hover:underline hover:cursor-pointer'>Kaleab D.</h1>
          </div> 
          <div className="flex lg:flex-row flex-col items-center justify-self-end">
            <div className="flex gap-4">
            <a href='https://www.linkedin.com/in/kaleabdereje/'><img src={Ld} alt="/" className='w-6 h-6 hover:scale-105'/></a>
              <a href='https://github.com/kaleabd'><img src={git} alt="/" className='w-6 h-6 hover:scale-105'/></a>
              <a href='https://twitter.com/Kaleab_thoughts'><img src={tw} alt="/" className='w-6 h-6 hover:scale-105'/></a> 
              <a href='https://t.me/kaleabdereje'><img src={tg} alt="/" className='w-6 h-6 hover:scale-105'/></a>
              <a href='https://www.instagram.com/kaleab_thoughts/'><img src={ig} alt="/" className='w-6 h-6 hover:scale-105'/></a>
            </div>
            <h1>version 1.41</h1>
          </div>
        </footer>
  )
}

export default Footer
