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
                </section>

                 <section className="branding-showcase">
                    <div className="branding-header">
                        <AnimatedCopy tag="h3" animateOnScroll={true}>
                            Brand Evolution
                        </AnimatedCopy>
                    </div>

                    <div className="branding-grid">
                        {/* Logo Comparison Row */}
                        <div className="logo-comparison">
                            <div className="logo-item original">
                                <div className="logo-content">
                                    <AnimatedCopy tag="h4" animateOnScroll={true} className="logo-title">
                                        Original Design
                                    </AnimatedCopy>
                                    <div className="logo-image-wrapper">
                                        <img src="/project/KLVE/originallogo.jpg" alt="Original Logo Design" />
                                    </div>
                                </div>
                            </div>

                            <div className="logo-item final">
                                <div className="logo-content">
                                    <AnimatedCopy tag="h4" animateOnScroll={true} className="logo-title">
                                        Final Logo
                                    </AnimatedCopy>
                                    <div className="logo-image-wrapper featured">
                                        <img src="/project/KLVE/Logo.jpg" alt="Final Logo Design" />
                                    </div>
                                </div>
                            </div>
                         </div>

                        {/* Logo Variations */}
                        <div className="logo-variations">
                            <div className="variation-header">
                                <AnimatedCopy tag="h4" animateOnScroll={true}>
                                    Logo Variations
                                </AnimatedCopy>
                            </div>
                            <div className="variation-image-wrapper">
                                <img src="/project/KLVE/Differentlogo.jpg" alt="Logo Variations" />
                            </div>
                        </div>

                        {/* Brand Colors */}
                        <div className="brand-colors">
                            <div className="colors-header">
                                <AnimatedCopy tag="h4" animateOnScroll={true}>
                                    Brand Color Palette
                                </AnimatedCopy>
                            </div>
                            <div className="colors-image-wrapper">
                                <img src="/project/KLVE/color.jpg" alt="Brand Color Palette" />
                            </div>
                        </div>
                    </div>
                </section>

          </div>
        <Footer />
        </ReactLenis>
       
    );
};


export default Transition(Project2);


