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
      title: 'Product Marketing Intern',
      description: 'As a Product Marketing Intern for TELUS’s digital HR platform, creating B2B messaging and positioning to help employers understand the value of our solution.',
      image: '/about/TELUS_Digital.jpg'
    },
    {
      number: '02',
      title: 'Social Media Creation',
      description: 'Introducing the campaigns and the potential of products in the market to various distribution beauty agents, clinic and spa business owners.',
      image: '/about/lassieel.jpg'
    },
    {
      number: '03',
      title: 'Social Media Marketing',
      description: 'Planned, created, and managed social media campaigns and newsletters to promote events, share industry insights, and engage members, ensuring consistent and professional communication across all platforms.',
      image: '/about/realestate.jpg'
    },
    {
      number: '04',
      title: 'Event Coordinator',
      description: 'Planning with a team to run an event for around 500 people celebrating Tet holiday including plenty of activities and food.',
      image: '/about/vvyc.png'
    }
  ];


    const workHeaderSection = stickyWorkHeaderRef.current;
    return (
       <ReactLenis root>
        {/* Hero section*/}
            <div className="page about">
                <section className="about-header">
                    <AnimatedCopy animateOnScroll={false} delay={0.5} tag="h1">
                        IN
                        
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
                        Experiences
                        </AnimatedCopy>
                    </div>
                    
                    
                    <div className="services-list">
                        {services.map((service, index) => (
                            <div
                              key={index}
                              className="service-item"
                              style={{ zIndex: services.length - index }}
                            >
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
            <section className="hobbies">
            <div className="hobbies-title">
                <AnimatedCopy tag="h1" animateOnScroll="true">
                     Hobbies
                </AnimatedCopy>
            </div>

          <div className="hobbies-grid">
          <div className="hobby" id="camera">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Filming
            </AnimatedCopy>
          </div>
          <div className="hobby" id="planning">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Planning
            </AnimatedCopy>
          </div>
          <div className="hobby" id="story">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Story
            </AnimatedCopy>
          </div>
          <div className="hobby" id="marketing">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Fashion
            </AnimatedCopy>
          </div>
        </div>
        </section>
            <Activities />
            {/* <FlyingText /> */}
            <Footer />
      </ReactLenis>
    );
};

export default Transition(About);
