import React from "react";
import "./Project.scss";
import Overview from "../../components/Overview/Overview";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Footer from "../../components/Footer/Footer";


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


export default function Project() {
  return (
    <main className="project-cover-root">
      {/* Outer vertical container */}
      <section className="project-cover-container">
        {/* Top content */}
        <div className="project-cover-header">
          {/* Animation Text */}
          <div className="project-cover-anim-text">
            <span className="project-cover-section">Rejuvenation</span>
          </div>
          {/* Main Heading */}
          <div className="project-cover-title-row">
            <h1 className="project-cover-title">
              Rejuvenation Dermatologist New Look
            </h1>
          </div>
        </div>
        {/* Tags */}
        <nav className="project-cover-tags-row" aria-label="Project categories">
          <Tag color="light">Beauty</Tag>
          <Dot />
          <Tag color="light">Dermatologist</Tag>
          <Dot />
          <Tag>Branding</Tag>
          <Dot />
          <Tag>Product Design</Tag>
          <Dot />
          <Tag>Social Media Strategy</Tag>
        </nav>
        {/* Description */}
        <div className="project-cover-desc">
          Inspired by modern beauty, this rebranding project revitalizes Rejuvenation Dermatologist with a clear purpose: to create a trusted, elegant identity that enhances user experience and strengthens its digital presence
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
          src="/project/RejuvMD/Banner.jpg"
          alt="Rejuvenation Dermatologist branding mockup"
          draggable={false}
        />
      </div>
      {/* Bottom info grid */}
      <section className="project-cover-infogrid">
        <div className="project-cover-infogrid-row">
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">ROLE</div>
            <div className="project-cover-infogrid-item">Product Designer</div>
            <div className="project-cover-infogrid-item">Social Media Planning</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TEAM</div>
            <div className="project-cover-infogrid-item">Personal Project</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TOOLS</div>
            <div className="project-cover-infogrid-item">Figma, Illustrator</div>
            <div className="project-cover-infogrid-item">Midjourney</div>
            <div className="project-cover-infogrid-item">Google Analytics</div>
          </div>
          <div className="project-cover-infogrid-col">
            <div className="project-cover-infogrid-label">TIMELINE</div>
            <div className="project-cover-infogrid-item">4 weeks</div>
            <div className="project-cover-infogrid-item">Total: 50 hours</div>
          </div>
        </div>
       
      </section>
    <Overview />
    <ProjectDetail />
    <section className="next-project">
                    <AnimatedCopy tag="p" animateOnScroll={true} className="primarysm">
                        02 - 04
                    </AnimatedCopy>
                    <AnimatedCopy tag="h3" animateOnScroll={true}>
                        Next
                    </AnimatedCopy>

                    <div className="next-project-img">
                        <div className="next-project-img-wrapper">
                          <ParallaxImage src="/project/KLVE/Banner.jpg" alt="KLVE Banner" />
                        </div>
                    </div>

                    <AnimatedCopy tag="h4" animateOnScroll={true}>
                        KLVE Branding
                    </AnimatedCopy>
                </section>
        <Footer />
    </main>
    
  );
}