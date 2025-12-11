import React, { useEffect } from "react";
import "./Project2.scss";
import OverviewKLVE from "../../components/OverviewKLVE/OverviewKLVE";
import ProjectDetailKLVE from "../../components/ProjectDetailKLVE/ProjectDetailKLVE";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";


// Reusable Tag component for pill tags
function Tag({ children, color = "dark", style = {}, ...props }) {
  return (
    <span
      className={`project-tag${color === "light" ? " light" : ""}`}
      style={style}
      {...props}
    >
      {children}
    </span>
  );
}

// Reusable Dot separator
function Dot() {
  return (
    <span className="project-dot" aria-hidden="true">
      &middot;
    </span>
  );
}

// Reusable InfoBlock for bottom info grid
function InfoBlock({ title, items }) {
  return (
    <div className="project-info-block">
      <div className="project-info-title">{title}</div>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="project-info-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


function Project() {
  // Ensure we land at the top when navigating into this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="project-cover-root">
      {/* Outer vertical container */}
      <section className="project-cover-container">
        {/* Top content */}
        <div className="project-cover-header">
          {/* Animation Text */}
          <div className="project-cover-anim-text">
            <span className="project-cover-section">KLVE Studio</span>
          </div>
          {/* Main Heading */}
          <div className="project-cover-title-row">
            <h1 className="project-cover-title">
              KLVE Studio - Fashion Brand
            </h1>
          </div>
        </div>
        {/* Tags */}
        <nav className="project-cover-tags-row" aria-label="Project categories">
          <Tag color="light">Fashion</Tag>
          <Dot />
          <Tag >Branding</Tag>
          <Dot/>
          <Tag>Startup</Tag>
          <Dot />
          <Tag>Product Design</Tag>
          <Dot />
          <Tag>Marketing Plan</Tag>
        </nav>
        {/* Description */}
        <div className="project-cover-desc">
          KLVE is a fictional inspirational fashion brand designed with a main mission design for those who dare to show their personality through the look of fashion. The projects is a great example of myself as a Analysis, Marketer and Designer.
        </div>
        {/* View Live Project Button */}
        <a
          className="project-cover-btn"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Live Project</span>
          <span className="project-cover-btn-icon">
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59932bdc-6afd-4010-a87c-7a1926826a91"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
          </span>
        </a>
      </section>
      {/* Main image */}
      <div className="project-cover-mainimg-wrapper">
        <img
          className="project-cover-mainimg"
          src="/project/KLVE/Banner.jpg"
          alt="KLVE Studio branding mockup"
          draggable={false}
        />
      </div>
      {/* Bottom info grid */}
      <section className="project-cover-infogrid">
        <div className="project-cover-infogrid-row">
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">ROLE</div>
            <div className="project-cover-infogrid-item">Product Designer</div>
            <div className="project-cover-infogrid-item">Business Analyst</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TEAM</div>
            <div className="project-cover-infogrid-item">Personal Project</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TOOLS</div>
            <div className="project-cover-infogrid-item">Illustrator</div>
            <div className="project-cover-infogrid-item">Midjourney</div>
            <div className="project-cover-infogrid-item">Google Analytics</div>
             <div className="project-cover-infogrid-item">Trello</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TIMELINE</div>
            <div className="project-cover-infogrid-item">3 weeks</div>
            <div className="project-cover-infogrid-item">Total: 40 hours</div>
          </div>
        </div>
       
      </section>
    <OverviewKLVE />
    <ProjectDetailKLVE />
    <section className="next-project">
                    <AnimatedCopy tag="p" animateOnScroll={true} className="primarysm">
                        03 - 04
                    </AnimatedCopy>
                    <AnimatedCopy tag="h3" animateOnScroll={true}>
                        Next
                    </AnimatedCopy>

                    <div className="next-project-img">
                        <div className="next-project-img-wrapper">
                          <ParallaxImage src="/project/CareerCompass/Banner.png" alt="Career Compass Banner" />
                        </div>
                    </div>

                    <AnimatedCopy tag="h4" animateOnScroll={true}>
                        Career Compass
                    </AnimatedCopy>
                </section>
        <Footer />
    </main>
    
  );
}

export default Transition(Project);
