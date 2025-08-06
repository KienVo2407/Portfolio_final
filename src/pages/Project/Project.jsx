import React from "react";
import "./Project.scss";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transitition/Transition"
import Footer from "../../components/Footer/Footer";

const Project = () => {
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
                         <ParallaxImage src="/project/RejuvMD/Banner.jpg" alt="RejuvMD Banner" />
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
                            Branding | Social Media Marketing
                        </AnimatedCopy>
                    </div>

                    <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Total Hours
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            24H
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
                </section>

                {/* <section className="logo">
                    
                </section> */}
                <section className="development">
                    <div className="research">
                        <div className="research-text">
                            <div className="research-text-title">
                            <AnimatedCopy tag="h5" animateOnScroll={true}>
                                A.Research & Development Process
                            </AnimatedCopy>
                            </div>

                            <div className="research-text-body">
                            <AnimatedCopy tag="h6" animateOnScroll={true}>
                                1. Organization Goal
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true}>
                                Rejuvenation Dermatology is led by board-certified dermatologists and expertly trained general practitioners. From consultation, to procedure, to aftercare and results, 
                                our team of experts will be with you each step of the way.
                            </AnimatedCopy>

                            <AnimatedCopy tag="h6" animateOnScroll={true}>
                                2. Research Process
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true}>
                                <li>Analyzing competitors in the wellness and aesthetics space Dermatologist</li>
                                <li>studied color psychology, typography trends, and consumer behavior in the beauty industry</li>
                                <li>Target audiences—primarily women and professionals aged 25–45 were seeking treatments they could trust, with an emphasis on clean aesthetics and transparency</li>
                                
                            </AnimatedCopy>

                             <AnimatedCopy tag="h6" animateOnScroll={false}>
                                3. Target
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={false}>
                               The existing brand lacked cohesion and visual appeal. 
                               Rebranding became a necessary step to elevate perception and create a solid foundation for future digital marketing efforts.
                            </AnimatedCopy>
                            </div>


                        </div>
                        <div className="research-image">
                            <AnimatedCopy animateOnScroll={true}>
                            <img src="/project/RejuvMD/original version.jpg" alt="" />
                            </AnimatedCopy>
                        </div>
                    </div>

                    <div className="target">
                        <div className="target-title" >
                           <AnimatedCopy tag="h4" animateOnScroll={true}>
                            Branding Development Process</AnimatedCopy>
                        </div>
                            
                        <div className="target-subtitle" tag="p" animateOnScroll={true}>
                            <AnimatedCopy tag="p" animateOnScroll={true}>
                               The design process began with <b> multiple logo drafts</b>, each exploring different combinations of typography, iconography such as star, drop, face line-art, and structure.  
                            </AnimatedCopy>
                        </div>
                        <div className="target-container">
                            <div className="target-container-1">
                                <AnimatedCopy>
                                    <h5>Elegent - Minimal</h5>
                                    <p>The new logo design use the serif to focus on developing to make the brand being more recognition and 
                                        memorable in the customers mind</p>
                                </AnimatedCopy>
                            </div>
                            <div className="target-container-2">
                                <AnimatedCopy >
                                    <h5>Elegent - Minimal</h5>
                                    <p>The new logo design use the serif to focus on developing to make the brand being more recognition and 
                                        memorable in the customers mind</p>
                                </AnimatedCopy>
                            </div>
                            <div className="target-container-3">
                                <AnimatedCopy animateOnScroll={false} >
                                    <h5>Elegent - Minimal</h5>
                                    <p>The new logo design use the serif to focus on developing to make the brand being more recognition and 
                                        memorable in the customers mind</p>
                                </AnimatedCopy>
                            </div>
                        </div>
                    </div>
                </section>

                     <div className="design-logo">
                        <img src="/project/RejuvMD/logobanner-01.png" alt="logobanner" />

                    </div>
                
                <section className="next-project">
                    <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                        02 - 05
                    </AnimatedCopy>
                    <AnimatedCopy tag="h3" animateOnScroll={true}>
                        Next
                    </AnimatedCopy>

                    <div className="next-project-img">
                        <div className="next-project-img-wrapper">
                          <ParallaxImage src="/project/RejuvMD/Banner.jpg" alt="RejuvMD Banner" />
                        </div>
                    </div>

                    <AnimatedCopy tag="h4" animateOnScroll={true}>
                        Market Pulse
                    </AnimatedCopy>
                </section>
             </div>


        <Footer />
        </ReactLenis>
        
    )
}

export default Transition(Project);