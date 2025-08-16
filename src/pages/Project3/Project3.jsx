import React from "react"

import "./Project3.scss";
import "../Project/Project.scss"

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition"
import Footer from "../../components/Footer/Footer";

const Project3 = () => {
    const src = "https://www.figma.com/design/lEAfJy6KfY9MfdEmoeNkON/Landmark-cinema?node-id=118-413&t=xG6JXm4CIsAEch9C-1"
    const src1 = "https://www.figma.com/design/lEAfJy6KfY9MfdEmoeNkON/Landmark-cinema?node-id=357-5285&t=xG6JXm4CIsAEch9C-1"
    const figmaPrototypeEmbed =
  "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/lEAfJy6KfY9MfdEmoeNkON/Landmark-cinema?node-id=357-5323&p=f&t=xG6JXm4CIsAEch9C-0&scaling=min-zoom&content-scaling=fixed&page-id=357%3A5285&starting-point-node-id=357%3A5323";

    return ( 
        <ReactLenis root>
             <div className="page project project3">
                <section className="project-header">
                    <AnimatedCopy
                        delay={1}
                        animateOnScroll={false}
                        className="primary sm"
                    >
                        Website Redesign and Social Media planning 
                    </AnimatedCopy>
                    <AnimatedCopy tag="h2" delay={1}>
                        A renovated redesign cinema website perfect for smooth booking ticket flow  
                    </AnimatedCopy>
                </section>

                <section className="project-banner-img">
                    <div className="project-banner-img-wrapper">
                         <ParallaxImage src="/project/Landmark/banner.png" alt="Landmark banner" />
                    </div>
                </section>

                <section className="project-details">
                    <div className="details">
                        <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Overview
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            This project aimed to create a smooth ticket booking process,
                             easily used by anyone and required less steps to the final booking.
                        </AnimatedCopy>
                    </div>

                    <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Category
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            UI/UX | Marketing Plan
                        </AnimatedCopy>
                    </div>

                    <div className="details">
                         <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                            Total Hours
                        </AnimatedCopy>
                        <AnimatedCopy tag="h4" animateOnScroll={true}>
                            90H
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

                <section className="problem-section">
                    <div className="problem-content">
                        <div className="problem-text">
                            <AnimatedCopy tag="h3" animateOnScroll={true}>
                                Problem Analysis
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="problem-intro">
                                The original Landmark Cinemas website suffers from multiple critical flaws that hinder
                                user experience, engagement, and ticket conversions:
                            </AnimatedCopy>
                            <div className="problem-list">
                                <AnimatedCopy tag="p" animateOnScroll={true}>
                                    • Outdated & Unattractive Interface
                                </AnimatedCopy>
                                <AnimatedCopy tag="p" animateOnScroll={true}>
                                    • Overwhelming & Unnecessary Information
                                </AnimatedCopy>
                                <AnimatedCopy tag="p" animateOnScroll={true}>
                                    • Low User Attraction & Engagement
                                </AnimatedCopy>
                                <AnimatedCopy tag="p" animateOnScroll={true}>
                                    • Inefficient Booking Flow
                                </AnimatedCopy>
                            </div>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="problem-note">
                                The original website doesn't align with the brand value and still 
                                contains some design problems that affect the user booking ticket process.
                            </AnimatedCopy>
                        </div>
                        <div className="problem-image">
                            <AnimatedCopy animateOnScroll={true}>
                                <img src="/project/Landmark/original.jpg" alt="Original Landmark Website" />
                            </AnimatedCopy>
                        </div>
                    </div>
                </section>

                <section className="solution-section">
                    <AnimatedCopy tag="h3" animateOnScroll={true} className="section-title">
                        Design Solutions
                    </AnimatedCopy>
                    
                    <div className="solution-grid">
                        <div className="solution-item">
                            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                                Progress Tracking
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="solution-description">
                                Process bar to keep track with the booking progress and guide users through each step.
                            </AnimatedCopy>
                            <div className="solution-image">
                                <AnimatedCopy animateOnScroll={true}>
                                    <img src="/project/Landmark/checkoutstep.png" alt="Checkout process step" />
                                </AnimatedCopy>
                            </div>
                        </div>

                        <div className="solution-item">
                            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                                Streamlined Flow
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="solution-description">
                                Simplified booking steps with clear visual hierarchy and intuitive navigation.
                            </AnimatedCopy>
                            <div className="solution-image">
                                <AnimatedCopy animateOnScroll={true}>
                                    <img src="/project/Landmark/checkoutsession.png" alt="Booking flow step" />
                                </AnimatedCopy>
                            </div>
                        </div>

                        <div className="solution-item">
                            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                                Real-time Updates
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="solution-description">
                                Live movie listings on the home page with real-time availability and showtimes.
                            </AnimatedCopy>
                            <div className="solution-image">
                                <AnimatedCopy animateOnScroll={true}>
                                    <img src="/project/Landmark/seatselection.png" alt="Seat selection interface" />
                                </AnimatedCopy>
                            </div>
                        </div>

                        <div className="solution-item">
                            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
                                Guest Checkout
                            </AnimatedCopy>
                            <AnimatedCopy tag="p" animateOnScroll={true} className="solution-description">
                                Option to checkout as a guest during the booking process, reducing friction for new users.
                            </AnimatedCopy>
                            <div className="solution-image">
                                <AnimatedCopy animateOnScroll={true}>
                                    <img src="/project/Landmark/checkout.png" alt="Guest checkout option" />
                                </AnimatedCopy>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wireframe-section">
                    <AnimatedCopy tag="h3" animateOnScroll={true} className="section-title">
                        Design Process
                    </AnimatedCopy>
                    
                    <div className="wireframe-container">
                        <div className="wireframe-item">
                            <AnimatedCopy tag="h4" animateOnScroll={true} className="primary sm">
                                Low - Medium Fidelity Wireframe
                            </AnimatedCopy>
                            <div className="figma-embed">
                                <iframe
                                    title="Low-Medium Fidelity Wireframe"
                                    src={src}
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="wireframe-item">
                            <AnimatedCopy tag="h4" animateOnScroll={true} className="primary sm">
                                High Fidelity Wireframe
                            </AnimatedCopy>
                            <div className="figma-embed">
                                <iframe
                                    title="High Fidelity Wireframe"
                                    src={src1}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="prototype-section">
                    <AnimatedCopy tag="h3" animateOnScroll={true} className="section-title">
                        Interactive Prototype
                    </AnimatedCopy>
                    <AnimatedCopy tag="p" animateOnScroll={true} className="prototype-description">
                        Experience the redesigned booking flow through our interactive prototype.
                    </AnimatedCopy>
                    <div className="prototype-container">
                        <iframe
                            title="Interactive Figma Prototype"
                            src={figmaPrototypeEmbed}
                            allowFullScreen
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </ReactLenis>
    );
};

export default Transition(Project3);