import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./ProjectDetail.scss";
import AnimatedCopy from "../AnimatedCopy/AnimatedCopy";

export default function ProjectDetail() {
  /* --------------------------------------------
     SECTION LIST
  -------------------------------------------- */
  const sections = useMemo(
    () => [
      { id: "problem", title: "Problem & User Insights" },
      { id: "vision", title: "Vision & Strategy" },
      { id: "management", title: "Project Management" },
      { id: "deliverables", title: "Deliverables" },
      { id: "reflection", title: "Reflection" }
    ],
    []
  );

  /* --------------------------------------------
     STATE + REFS
  -------------------------------------------- */
  const [activeSection, setActiveSection] = useState("problem");
  const [showNav, setShowNav] = useState(true);
  const [showPdf, setShowPdf] = useState(false);
  const sectionRefs = useRef({});
  const containerRef = useRef(null);
  const clickLockRef = useRef(0);

  /* --------------------------------------------
     SCROLL HANDLER (scroll spy + show/hide nav)
  -------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      const viewportAnchor = window.innerHeight * 0.25; // track near top quarter
      let nextActive = activeSection;
      let closestDistance = Infinity;

      // 2) Only show nav while ProjectDetail is in view
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        setShowNav(isVisible);
      }

      // Skip scroll spy briefly after manual clicks to prevent flicker
      if (now < clickLockRef.current) return;

      // 1) Update active section based on closest visible block
      for (const sec of sections) {
        const el = sectionRefs.current[sec.id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        const fullyBelow = rect.top > window.innerHeight;
        const fullyAbove = rect.bottom < 0;
        if (fullyAbove || fullyBelow) continue;

        const distance = Math.abs(rect.top - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextActive = sec.id;
        }
      }

      if (nextActive !== activeSection) {
        setActiveSection(nextActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  /* --------------------------------------------
     SCROLL TO SECTION
  -------------------------------------------- */
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      setActiveSection(id); // highlight immediately
      clickLockRef.current = performance.now() + 800;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };


  /* --------------------------------------------
     LOCAL ScrollNav component
  -------------------------------------------- */
  const ScrollNav = ({ sections, activeSection, scrollTo }) => (
    <div className="pd-scrollnav">
      <div className="pd-scrollnav-line" />
      <ul>
        {sections.map((sec) => (
          <li
            key={sec.id}
            className={`pd-scrollnav-item ${
              activeSection === sec.id ? "active" : ""
            }`}
            onClick={() => scrollTo(sec.id)}
          >
            <span className="dot" />
            <span className="label">{sec.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  /* --------------------------------------------
     PAGE CONTENT
  -------------------------------------------- */
  return (
    <div
      id="project-detail-page"
      className="pd-root"
      ref={containerRef}
    >
      {/* SIDE NAV: only rendered while ProjectDetail is on screen */}
      {showNav && (
        <ScrollNav
          sections={sections}
          activeSection={activeSection}
          scrollTo={scrollToSection}
        />
      )}

      {/* CONTENT */}
      <div className="pd-content">
        {/* ---------------- PROBLEM ---------------- */}
        <motion.section
          id="problem"
          ref={(el) => (sectionRefs.current["problem"] = el)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* HEADER */}
          <header className="pd-header">
            <h1 className="gradient-text">What would be the challenges?</h1>
            <div className="pd-divider-icon">✦</div>
            <p className="pd-subheader">
              Based on 30 users feedback highlighting recurring pain points and
              clear business needs, I started analyzing deeper on which criteria
              in each problems would be improved.
            </p>
          </header>

          {/* BLOCK 01 */}
          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">01</div>
              <div className="pd-title">
                <div className="pd-title">Brand Perception</div>
                <div className="pd-body">
                  <div>
                    <ul>
                      <li>
                        <span className="pd-bold">
                          Consistency (80% of researchers):
                        </span>{" "}
                        the logo fonts, colors felt outdate, not aligned with
                        luxury healthcare brand.
                      </li>
                      <li>
                        <span className="pd-bold">
                          Recognition (90% of researchers):
                        </span>{" "}
                        agree the original logo is not recognizable, users could
                        not easily associate the old logo with rejuvenation/
                        health/ beauty
                      </li>
                      <li>
                        <span className="pd-bold">Trust Factor(70%):</span>
                        Visual identity did not reflect the quality of services
                        even though it has been around for40 years
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image" >
                    <img 
                      src="/project/RejuvMD/brandperception.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK 02 */}
          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">02</div>
              <div className="pd-title">
                <div className="pd-title">
                  Homepage Usability (Navigation Issue)
                </div>
                <div className="pd-body">
                  <div>
                    <p >
                      I asked my tester to went through the homepage and tried
                      to book the appointment. However:
                    </p>
                    <ul>
                      <li>
                        <span className="pd-bold">
                          Navigation rate (70% agreed):
                        </span>{" "}
                        users had difficulty finding key services or booking
                        links 15-20 sec
                      </li>
                      <li>
                        <span className="pd-bold">
                          Clarity (60% agreed):
                        </span>{" "}
                        the banner consist too much text, not enough visuals to
                        guide directions
                      </li>
                      <li>
                        <span className="pd-bold">
                          Conversion rate (70% agreed):
                        </span>{" "}
                        Booking CTA wasn't highlight enough → lower engagement
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image">
                    <img
                      src="/project/RejuvMD/landingpage.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK 03 */}
          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">03</div>
              <div className="pd-title">
                <div className="pd-title">Social Media Use</div>
                <div className="pd-body">
                  <div>
                    <ul>
                      <li>
                        Low engagement rate ( ~ 2.39% engagement rate) with
                        ~13K followers
                      </li>
                      <li>
                        Lack of variety content ( video - heavy feed , low
                        interaction posts): Video-only might fatigue the
                        audience.
                      </li>
                      <li>
                        Few posts that solicit comments, questions, or
                        user-generated content
                      </li>
                      <li>
                        Unclear CTAs or weak hook: not mainly targeting on
                        customer concerns
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image">
                    <img
                      src="/project/RejuvMD/socialmedia.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="insight">
            <h3 className="insight-title gradient-text">From Insights to Requirements</h3>
            <p className="pd-text" style={{ paddingBottom: "1rem" }}>
              Rejuvenation Dermatologist mainly target on woman in their late
              30s to early 60s who start and having signal of aging mark. As a
              adult and senior , they have limit time and tech-ability to go
              over content that is is unclear and conscious.
            </p>
          </div>
        </motion.section>

        {/* ---------------- VISION ---------------- */}
        <motion.section
          id="vision"
          ref={(el) => (sectionRefs.current["vision"] = el)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="pd-header">
            <h1 className="gradient-text">
              What would be the solution in this scenario ?
            </h1>
            <div className="pd-divider-icon">✦</div>
          </header>

          <section className="pd-block">
            <h2 className="pd-title">Vision</h2>
            <div className="pd-box">
               <p className="pd-text">Rejuvenation should embody a modern, trustworthy brand that connects with clients both online and offline, creating a seamless path from awareness to booking.</p>
            </div>
            <div className="pd-image">
              <img
                src="/project/RejuvMD/Moodboard.png"
                alt=""
              />
            </div>
          </section>

        <section className="pd-block">
            <h2 className="pd-title">Strategy</h2>
            <div className="pd-box">
                  <div className="pd-body">
                <p >Focus on 4 main Key Pillars: </p>
                  
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        <span className="pd-bold">
                          Brand Identity:
                        </span>{" "}
                        Modernize logo & Visuals to build trust.
                      </li>
                      <li>
                        <span className="pd-bold">
                           Website Experiences: 
                        </span>{" "}
                          Simplify homepage with clear highlight CTA, booking button, key services
                      </li>
                      <li>
                        <span className="pd-bold">Content Strategy:</span>
                         Diversify posts (carousels, UGC, interactive stories) to boost engagement rate fro 2.39% → 5%

                      </li>
                      <li>
                        <span className="pd-bold">
                           Community:
                        </span>{" "}
                           Leverage interaction by using polls, comments, and testimonials
                      </li>
                    </ul>
                  </div>
            </div>
            <div className="pd-image">
              <img
                src="/project/RejuvMD/Solution.png"
                alt=""
              />
            </div>
          </section>

          
        </motion.section>

        {/* ---------------- MANAGEMENT ---------------- */}
        <motion.section
          id="management"
          ref={(el) => (sectionRefs.current["management"] = el)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <header className="pd-header">
            <h1 className="gradient-text">
               How did I plan out my work ?
            </h1>
            <div className="pd-divider-icon">✦</div>
          </header>

          <section className="pd-block">
            <h2 className="pd-title">Planning System</h2>
            <div className="pd-body">
                <p>I structured the rebranding project using a clear planning system that aligned business goals with creative direction. This included defining the project scope, mapping user needs, setting timelines, and coordinating design and content deliverables. I also developed a content strategy and posting schedule to improve Rejuvenation Dermatologist’s social media performance, ensuring consistency, stronger brand messaging, and measurable engagement growth.</p>
                <div className="pd-image">
              <img
                src="/project/RejuvMD/ProjectManagement.png"
                alt=""
              />
            </div>
            </div>
          </section>
        </motion.section>

        {/* ---------------- DELIVERABLES ---------------- */}
        <motion.section
          id="deliverables"
          ref={(el) => (sectionRefs.current["deliverables"] = el)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <header className="pd-header">
            <h1 className="gradient-text">
               The Showcase of My Work
            </h1>
            <div className="pd-divider-icon">✦</div>
          </header> 

          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">01</div>
              <div className="pd-title">
                <div className="pd-title">Brand Redesign</div>
                <div className="pd-box">
                  <div className="pd-body">
                    <ul >
                      <li>
                        The  redesigned logo to better help customers recognize and stand out as a dermatologist brand.
                    </li>
                      <li>
                        
                          Simplify homepage with clear highlight CTA, booking button, key services
                      </li>
                      <li>
                         Keeping the same colors guide as the previous branding ⇒ unique of the color

                      </li>
                    
                    </ul>
                  </div>
                  
                </div>
                 <div className="pd-image">
              <img
                src="/project/RejuvMD/logobanner.png"
                alt=""
              />
            </div>
                </div>
              </div>
                
          </section>

          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">02</div>
              <div className="pd-title">
                <div className="pd-title">Homepage Redesign</div>
                   <p style={{marginTop: "1rem"}}>To ensure that the client could easily find the booking and clinic information , the new design keep consistent 
                      with the brand theme but focus more on user-experience and Call-To-Action.  </p>
                <div className="pd-box">
                    
                  <div className="pd-body">
                   <ul >
                      <li>
                        Redesigned homepage to communicate trust and streamline booking flow.
                    </li>
                      <li>
                        
                          Simplify homepage with clear highlight CTA, booking button, key services
                      </li>
                    
                    </ul>
                   
                  </div>
                  
                </div>
                 <div className="pd-image">
              <img
                src="/project/RejuvMD/Website.png"
                alt=""
              />
            </div>
                </div>
              </div>
                
          </section>

        <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">03</div>
              <div className="pd-title">
                <div className="pd-title">Social Media Strategy</div>
                <div className="pd-box">
                  <div className="pd-body">
                    <p>Developed a comprehensive social media strategy to enhance online presence and engagement.</p>
                    
                  </div>
                  
                </div>
                <div
                  className="pd-pdf-banner"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowPdf(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setShowPdf(true);
                    }
                  }}
                >
                  <div className="pd-pdf-banner__text">
                    <div className="pd-pdf-banner__eyebrow">PDF</div>
                    <div className="pd-pdf-banner__title">Social Media Strategy</div>
                    <div className="pd-pdf-banner__hint">Click to preview in-page or open externally</div>
                  </div>
                  <div className="pd-pdf-banner__thumb">
                    <img src="/project/RejuvMD/socialmedia.png" alt="Social media strategy preview" />
                    <span className="pd-pdf-banner__badge">Open</span>
                  </div>
                </div>
                <div className="pd-cta-row">
                  <button
                    type="button"
                    className="pd-link-btn"
                    onClick={() => setShowPdf(true)}
                  >
                    View Social Media Strategy (PDF)
                  </button>
                  <a
                    className="pd-link-ghost"
                    href="/project/RejuvMD/SocialMediaStrategy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in new tab ↗
                  </a>
                </div>
                </div>
              </div>
                
          </section>
          
        </motion.section>

        {/* ---------------- REFLECTION ---------------- */}
        <motion.section
          id="reflection"
          ref={(el) => (sectionRefs.current["reflection"] = el)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className="pd-header">
            <h1 className="gradient-text">
               What did I learn ?
            </h1>
            <div className="pd-divider-icon">✦</div>
          </header>
          
            <section className="pd-block">
            <h2 className="pd-title">Reflection</h2>
            <div className="pd-body">
                <p>This project strengthened my ability to translate user perception issues into a cohesive visual identity and actionable strategy. Rebranding Rejuvenation Dermatologist required balancing aesthetics with clarity, ensuring the brand felt both modern and trustworthy. The social media analysis also revealed how design and communication work together to drive engagement. Overall, this project taught me the value of combining research, structured planning, and design consistency to elevate a brand’s presence across all touchpoints.</p>
                
            </div>
          </section>


        </motion.section>
      </div>

    {/* PDF Modal */}
    {showPdf && (
      <div className="pd-modal-overlay" onClick={() => setShowPdf(false)}>
        <div className="pd-modal" onClick={(e) => e.stopPropagation()}>
          <button
            className="pd-modal-close"
            type="button"
            onClick={() => setShowPdf(false)}
            aria-label="Close PDF"
          >
            ✕
          </button>
          <iframe
            src="/project/RejuvMD/SocialMediaStrategy.pdf"
            title="Social Media Strategy PDF"
            className="pd-modal-frame"
          />
        </div>
      </div>
    )}
      
    </div>
  );
}
