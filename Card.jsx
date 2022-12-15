import React from "react";
import link from "./assets/link.svg"
import git from "./assets/gitb.svg"

export default function Card(props){
    return (
        <div className="card card-compact w-full  bg-base-100 shadow-xl transform " >
        <figure><img src={props.image} alt="images" className="w-[700px] no-image" /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="lg:text-sm text-[12px]">{props.tag}</p>
          <div className="card-actions justify-end lg:gap-6 gap-2">
            <a href={props.web} target="_blank"><img src={link} alt="/git hub" className="lg:w-6 lg:h-6 w-4 h-4 hover:scale-105" /></a>
            <a href={props.git}  target="_blank"><img src={git} alt="/git hub" className="lg:w-6 lg:h-6 w-4 h-4 hover:scale-105" /></a>
          </div>
      </div>
      </div>
    )
}