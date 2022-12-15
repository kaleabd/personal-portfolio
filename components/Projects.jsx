import React from 'react'
import Card from './Card.jsx'
import Right from '../assets/right.svg'
import Data from "../Data"

function Projects() {
    const [next, setNext] = React.useState(0)
    let nextData = Data[next]
    function Next(){
        setNext((prev) => {
          return prev < Data.length && prev >= 0? 
            prev + 1 === Data.length?
              prev - Data.length - 1: 
          prev + 1 : prev - 1
        })
       }
    function Prev(){
        setNext((prev) => {
          return prev < Data.length && prev >= 0? 
            prev - 1 < 0 ?
              prev + Data.length - 1 : 
          prev - 1 : prev + 1
        })
       }
       
       
  return (
    <>
    <img src={nextData.image} alt="/" className='absolute z-0 h-screen object-cover'/>
    <div className='z-20 lg:px-10 md:px-4 px-2 flex flex-col gap-2 items-start lg:justify-start justify-center w-full backdrop-filter backdrop-blur-lg'>
    <h1 className='lg:text-[2rem] md:text-3xl text-2xl uppercase font-bold transform lg:translate-y-0 md:translate-y-[-180px] translate-y-[-130px]  text-[#F37F14] bg-white bg-opacity-75 rounded-lg py-2 my-2 px-4 drop-shadow-lg'>PROJECTS</h1>
    <div className='flex text-main font-bold justify-center w-full'>
      <ul className='flex gap-12 bg-white px-6 py-2 rounded-lg'>
        <li className='border-b-4 border-main'>All</li>
        <li onClick={()=>{return nextData.filter(items => items.catag == "web")}}> <a href="#">UI/UX</a></li>
        <li>Web</li>
        <li>Mobile</li>
        <li>GFX</li>
      </ul>
    </div>
    
    <div className="h-2 bg-[#F37F14] lg:w-[7%] md:w-[8%] w-[20%] mb-6 lg:translate-y-0 md:translate-y-[-180px] translate-y-[-130px]"></div>
      {/* and this where to put the projects  */}
         <div className='w-full flex items-center justify-around lg:gap-12 md:gap-4 gap-2'>
         <button onClick = {Prev} className = "bg-white md:px-2 px-4 lg:p-2 rounded-full hover:scale-105 transition ease-in-out duration-300">
          <img src={Right} alt="/" className='w-14 h-14 transform rotate-180' />
        </button>
          <div className='flex justify-center'>
            <Card 
                name = {nextData.desc} 
                tag = {nextData.tags}
                image = {nextData.image}
                git = {nextData.git}
                web = {nextData.web}
              />
          </div>
        <button onClick = {Next} className = "bg-white md:px-2 px-4 lg:p-2 rounded-full hover:scale-105 transition ease-in-out duration-300">
          <img src={Right} alt="/" className='w-14 h-14' />
        </button>
         </div>
    </div>
    </>
    
  )
}

export default Projects
