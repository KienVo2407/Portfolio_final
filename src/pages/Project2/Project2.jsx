import React from "react";
import "./Project2.scss";
import "../Project/Project.scss"

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition"
import Footer from "../../components/Footer/Footer";

const Project2 = () => {
    return ( 
        <ReactLenis root>
             <div className="page project">
                <section className="project-header">
                    <AnimatedCopy
                        delay={1}
                        animateOnScroll={false}
                        className="primary sm"
                    >
                        Rebranding and Social Media planning 
                    </AnimatedCopy>
                    <AnimatedCopy tag="h2" delay={1}>
                        Rejuvenation Dermatologist New Look  
                    </AnimatedCopy>
                </section>

                <section className="project-banner-img">
                    <div className="project-banner-img-wrapper">
                         <ParallaxImage src="/project/KLVE/Producttags.jpg" alt="KLVE Banner" />
                    </div>
                </section>

                <section className="project-details">
                    <div className="details">
                        <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Overview
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            This project aimed to elevate Rejuvenation Dermatology Burnaby’s brand with a modern, cohesive visual 
                            identity that supports both marketing and customer experience
                        </AnimatedCopy>
                    </div>

                    <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Category
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            Branding | Marketing Plan
                        </AnimatedCopy>
                    </div>

                    <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Total Hours
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            48H
                        </AnimatedCopy>
                    </div>

                      <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            By
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            Kien Vo
                        </AnimatedCopy>
                    </div>

                    <section>
                        <div>
                             <AnimatedCopy tag="h4" animateOnScroll={true} className="">

                             </AnimatedCopy>
                            <img src="/project/KLVE/" alt="" />
                        </div>
                    </section>
                </section>

          </div>
        </ReactLenis>
    );
};


export default Transition(Project2);


