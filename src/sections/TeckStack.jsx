import React from 'react'
import {techStackIcons} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const TeckStack = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card' , {y : 50 , opacity : 0} , {y : 0 , opacity : 1 , duration : 1 , ease : 'power2.inOut' , stagger : 0.2 ,

        });
    })
    return (
        <div id={"skills"} className={"flex-center section-padding"}>
            <div>
                <div className="skills-title mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">My prefered tech stacks</h2>

                </div>
                <div className={"tech-grid"}>
                    {techStackIcons.map((icon)=>(
                        <div key={icon.name} className={"card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"}>
                            <div className={"tech-card-animated-bg"} />
                            <div className={"tech-card-content"}>
                                <div className={"tech-icon-wrapper"}>
                                    <TechIcon model={icon}/>
                                </div>

                                <div className={"padding-x w-full"}>
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TeckStack
