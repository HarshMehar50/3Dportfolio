import React from 'react'
import {useRef} from "react";
import {gsap} from 'gsap';
import{ScrollTrigger} from "gsap/ScrollTrigger";
import{ useGSAP} from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    //const project3Ref = useRef(null);
    useGSAP(()=>{
    const projects = [project1Ref.current , project2Ref.current];
    projects.forEach((card , index) => {
        gsap.fromTo(
        card , {y : 50 , opacity : 0} , {y : 0 , opacity: 1 , duration:1 , delay : 0.3*(index+1) ,
                scrollTrigger : {trigger : card , start : 'top bottom -= 100'}})
    });

        gsap.fromTo(sectionRef.current , {opacity:0} , {opacity: 1 , duration:1.5});
    } , []);
    return (
        <section id={"work"} ref={sectionRef} className={"app-showcase"}>
            <div className={"w-full"}>
                <div className={"showcaselayout"}>
                    <div className={"first-project-wrapper"} ref={project1Ref}>
                        <div className={"image-wrapper"}>
                            <a href="https://github.com/HarshMehar50/Zentry-Landing-page.git" target="_blank" rel="noopener noreferrer">
                                <img src={"/images/zentry.png"} alt={"Zentry Landing page"}/>
                            </a>
                        </div>
                        <div className={"text-content"}>
                            <h2>Built to replicate its sleek design, animations, and modern user interface.</h2>
                            <p className={"text-white-50 md:text-xl"}>
                                It focuses on responsive layouts, smooth transitions, and pixel-perfect styling to closely match the original. It demonstrates the
                                use of clean code structure, performance optimization, and attention to UI/UX details to deliver a seamless browsing
                                experience similar to the original Zentry website.
                            </p>
                        </div>
                    </div>
                    <div className={"project-list-wrapper overflow-hidden"}>
                        <div className={"project"} ref={project2Ref}>
                            <div className={"image-wrapper bg-[#ffefdb]"}>
                                <a href="https://github.com/HarshMehar50/3Dportfolio" target="_blank" rel="noopener noreferrer">
                                    <img src={"/images/portfolio.png"} alt={"3D portfolio"}/>
                                </a>
                            </div>
                            <h2>3D portfolio</h2>
                            <p className={"text-white-50 md:text-xl"}>A React Native website to track my overall progress in DSA, CP and Development</p>
                        </div>

                        <div className={"project"} ref={project2Ref}>
                            <div className={"image-wrapper bg-[#ffefdb]"}>
                                <a href="https://github.com/HarshMehar50/weather-forecast-app" target="_blank" rel="noopener noreferrer">
                                    <img src={"/images/wapp.png"} alt={"weather&forecast"}/>
                                </a>
                            </div>
                            <h2>Weather&Forecast App</h2>
                            <p className={"text-white-50 md:text-xl"}>An API powered dynamic project to see the weather and forecast of desired location</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection

