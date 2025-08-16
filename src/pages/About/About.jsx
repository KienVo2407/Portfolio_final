import React, {useRef} from "react";
import "./About.scss"

import Transition from "../../components/Transition/Transition";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import FlyingText from "../../components/FlyingText/FlyingText";
import ShinyText from "../../components/ShinyText/ShinyText";
import Activities from "../../components/Activities/Activities";
import SkillGallery from "../../components/SkillGallery/SkillGallery";

import ReactLenis from "lenis/react";
import { image, img } from "framer-motion/client";



const About = () => {
    const stickyWorkHeaderRef = useRef(null);
     const services = [
    {
      number: '01',
      title: 'BRAND DESIGNER',
      description: 'Developing comprehensive marketing strategies that drive engagement and build meaningful connections between brands and customers.',
      image: '/project/Design/cocktailposter.jpg'
    },
    {
      number: '02',
      title: 'MARKETING',
      description: 'Creating visual identities that resonate with your audience and communicate your brand values through strategic design solutions.',
      image: '/project/Design/jelwery.jpg'
    },
    {
      number: '03',
      title: 'VIDEO PLANNING & EDITING',
      description: 'Crafting immersive visual experiences that push the boundaries of digital storytelling and user interaction.',
      image: '/project/Design/cocktail.jpg'
    },
    {
      number: '04',
      title: 'WEB DEVELOP',
      description: 'Building responsive, performant websites that combine beautiful design with seamless functionality and user experience.',
      image: '/project/Design/cocktailposter.jpg'
    }
  ];


    const workHeaderSection = stickyWorkHeaderRef.current;
    return (
       <ReactLenis root>
        {/* Hero section*/}
            <div className="page about">
                <section className="about-header">
                    <AnimatedCopy animateOnScroll={false} delay={0.5} tag="h1">
                        EST
                        
                    </AnimatedCopy>
                     <AnimatedCopy animateOnScroll={false} delay={0.5} tag="h1">
                        2005
                    </AnimatedCopy>
                 </section>
                 
                 <section className="about-hero">
                    <div className="about-hero-img">
                        <img src="/about/banner.jpg" alt="Baby" />
                    </div>
                 </section>

                 <section className="about-me-copy">
                    <div className="about-me-copy-wrapper">
                        {/* <AnimatedCopy animateOnScroll={true} tag="h2">
                            Adapility
                        </AnimatedCopy> */}
                        <AnimatedCopy animateOnScroll={true} tag="h3">
                            Hi I'm Kien - A CREATIVE MIND BLENDING DESIGN, STRATEGY, AND STORYTELLING. 
                            I BUILD BOLD VISUALS AND MEANINGFUL EXPERIENCES THAT CONNECT PEOPLE AND 
                            LEAVE AS LASTING IMPACT. 
                        </AnimatedCopy>

                        <AnimatedCopy animateOnScroll={true} tag="h3">
                            For me, marketing is not just selling product. It's the meaningful process
                             from creating the product and to make it reaching to customer
                        </AnimatedCopy>

                        <AnimatedCopy animateOnScroll={true} tag="h3">
                            Hi I'm Kien - A CREATIVE MIND BLENDING DESIGN, STRATEGY, AND STORYTELLING. 
                            I BUILD BOLD VISUALS AND MEANINGFUL EXPERIENCES THAT CONNECT PEOPLE AND 
                            LEAVE AS LASTING IMPACT. 
                        </AnimatedCopy>
                    </div>

                 </section>
                
                <SkillGallery />

                 <section className="services">
                    <div className="services-header">
                        <AnimatedCopy tag="h2" animateOnScroll={true}>
                        Services
                        </AnimatedCopy>
                    </div>
                    
                    
                    <div className="services-list">
                        {services.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-number">
                                    <AnimatedCopy tag="h1" animateOnScroll={true} delay={index * 0.1}>
                                        {service.number}
                                    </AnimatedCopy>
                                </div>
                                
                                <div className="service-content">
                                    <div className="service-header">
                                        <AnimatedCopy tag="h3" animateOnScroll={true} delay={index * 0.1 + 0.2}>
                                        {service.title}
                                        </AnimatedCopy>
                                       
                                       
                                    </div>
                                
                                    <div className="service-details">
                                        <AnimatedCopy tag="p" animateOnScroll={true} delay={index * 0.1 + 0.3}>
                                            {service.description}
                                        </AnimatedCopy>
                                        <div className="service-image">
                                        <AnimatedCopy >
                                            <img 
                                            src={service.image} 
                                            alt={`${service.title} showcase`}
                                                />
                                        </AnimatedCopy>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section> 
            </div>
            <Activities />
            {/* <FlyingText /> */}
            <Footer />
      </ReactLenis>
    );
};

export default Transition(About);