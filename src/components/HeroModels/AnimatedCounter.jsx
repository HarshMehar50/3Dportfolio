import React from 'react'
import {counterItems} from "../../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
    return (
        <div id={"counter"} className={"padding-x-lg xl:mt-0 mt-32"}>
            <div className={"mx-auto grid-4-cols"}>
                {counterItems.map((item, index)=>(
                    <div key={index} className={"bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"}>
                        <div className={"counter-number text-white text-5xl font-bold mb-2"}>
                            <div className="flex items-center gap-18">
                                <CountUp suffix={item.suffix} end={item.value} />
                                {item.imgPath && item.link && (
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="socials"
                                    >
                                        <img 
                                            src={item.imgPath} 
                                            alt={item.label} 
                                            className="w-12 h-12 object-contain hover:opacity-80 transition-opacity"
                                        />
                                    </a>
                                )}
                            </div>
                            <div className={"text-white-50 text-lg"}>{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AnimatedCounter
