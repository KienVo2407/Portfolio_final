import React, { useRef, useState, useEffect, useMemo } from "react";
import "./ProjectDetailKLVE.scss";
import { motion } from "framer-motion";

export default function ProjectDetailKLVE() {
  /* --------------------------------------------
     SECTION LIST
  -------------------------------------------- */
  const sections = useMemo(
    () => [
      { id: "market", title: "Market Research" },
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
  const [activeSection, setActiveSection] = useState("market");
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
      const viewportAnchor = window.innerHeight * 0.25;
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
        {/* ---------------- MARKET ---------------- */}
        <section
          id="market"
          ref={(el) => (sectionRefs.current["market"] = el)}
        >
          {/* HEADER */}
          <header className="pd-header">
            <h1 className="gradient-text">The fashion industry in current day</h1>
            <div className="pd-divider-icon">✦</div>
            <p className="pd-subheader">
              I conducted the market research on fashion industy: fast fashion brand, medium street wear brand, local brand, to luxury brand
            </p>
          </header>

          {/* BLOCK 01 */}
          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">01</div>
              <div className="pd-title">
                <div className="pd-title">Industry Analysis</div>
                <div className="pd-body">
                  <div>
                    <p className="pd-bold">The fashion industry demonstrates robust but slowing growth. Global fashion revenue is projected to reach $920.19 billion in 2025, growing at 4.73% CAGR through 2030. 
                        The fashion market is valued at $1.84 trillion globally and $22.45 billion in Canada, yet 85% of fashion startups fail within their first 90 days, primarily due to market saturation and cash flow issues. </p>
                    <ul>
                      <li>
                        Mass apparel dominates with 68% market share, while luxury represents only 5%
                      </li>
                      <li>
                        The mid-tier contemporary segment shows opportunity gaps
                      </li>
                      <li>
                        Sustainable fashion is growing at 11.3% annually, expected to reach 6.4% market share by 2026
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image" >
                    <img 
                      src="/project/KLVE/Fail.png"
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
                  User-need Analysis
                </div>
                <div className="pd-body">
                  <div>
                    <p className="pd-bold">
                     Canadian Consumer Spending Patterns:
                    </p>
                    <ul>
                      <li>
                        Average Canadian household spends $2,303 annually on clothing and accessories
                      </li>
                      <li>
                        Canadian retail sales surged 5.7% year-over-year, with apparel leading growth
                      </li>
                      <li>
                        82% of Canadian consumers prefer store brands for affordability
               
                      </li>
                      <li>
                        59% of Canadian consumers prioritize sustainable and ethically sourced fashion
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image">
                    <img
                      src="/project/KLVE/Canadian.png"
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
                <div className="pd-title">International Manufacturing Cost</div>
                <div className="pd-body">
                  <div>
                    <p className="pd-bold"> Major Affordable Manufacturing cost located in Asia country included: </p>
                    <ul>
                      <li>
                        China produces over 50% of global apparel
                      </li>
                      <li>
                        Vietnam supplies 19-21% of US apparel imports
                      </li>
                      <li>
                        Bangladesh specializes in mass production basics
                      </li>
                      <li>
                        40% of clothing sold in the USA is made in China
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image">
                    <img
                      src="/project/KLVE/Cost.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK 04 */}
          <section className="pd-block">
            <div className="sub-header">
              <div className="pd-num">04</div>
              <div className="pd-title">
                <div className="pd-title">International Spending on Clothing</div>
                <div className="pd-body">
                  <div>
                    <p className="pd-bold"> Developed Markets (High Value, Lower Volume):</p>
                    <ul>
                      <li>
                        Norway: $1,150/person, 12 items ($95.83/item)
                      </li>
                      <li>
                        UK: $889/person, 33 items ($26.94/item)
                      </li>
                      <li>
                        Bangladesh specializes in mass production basics
                      </li>
                      <li>
                        USA: $844/person, 53 items ($15.92/item)
                      </li>
                    </ul>
                  </div>
                  <div className="pd-image">
                    <img
                      src="/project/KLVE/Spending.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="insight">
            <h3 className="insight-title gradient-text">Market Gap</h3>
            <p className="pd-text" style={{ paddingBottom: "1rem" }}>
              Through the research and analysis process, I conclude that most brands got sold in Vancouver don’t have a niche design but come as a high price even though the manufacturing cost is low. Lack of option in menswear ( first target market)
             ⇒ KLVE is born with the mission of creating niche & fashion design with high materials but keeping the medium price for user easy approaching. Men also want to dresswell</p>
          </div>
        </section>

        {/* ---------------- VISION ---------------- */}
        <section
          id="vision"
          ref={(el) => (sectionRefs.current["vision"] = el)}
        >
          <header className="pd-header">
            <h1 className="gradient-text">
              How would I plan the brand vision & strategy ?
            </h1>
            <div className="pd-divider-icon">✦</div>
          </header>

          <section className="pd-block">
            <h2 className="pd-title">Vision</h2>
            <div className="pd-box">
               <p className="pd-text">KLVE should become a young fashion brand base but having a strong passion to make the swift in the fashion market trend in Vancouver. Attract customer through niche design and creative marketing campaigns</p>
            </div>
            <div className="pd-image">
              <img
                src="/project/KLVE/Vision.png"
                alt=""
              />
            </div>
          </section>

        <section className="pd-block">
            <h2 className="pd-title">Strategy</h2>
            <div className="pd-box">
                  <div className="pd-body">
                <p >Focus on 3 main Key Strategy through Brand Development: </p>
                  
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        Targeting on niche market of high-quality fashion for menswear
                      </li>
                      <li>
                        Sustainability movement - Quality over quantity mindset gaining traction among conscious consumers
                      </li>
                      <li>
                        Digital-First Approach - Targeting on effective social media campaign that saving first cost

                      </li>
                      
                    </ul>
                  </div>
            </div>
            <div className="pd-image">
              <img
                src="/project/KLVE/Strategy.png"
                alt=""
              />
            </div>
          </section>

          
        </section>

        {/* ---------------- MANAGEMENT ---------------- */}
        <section
          id="management"
          ref={(el) => (sectionRefs.current["management"] = el)}
         
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
        </section>

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
                <div className="pd-title">Logo Design</div>
                <div className="pd-box">
                  <div className="pd-body">
                    <ul >
                      <li>
                        The "KLVE studio" logo showcases a modern and stylish design, with the brand name displayed in a bold, elegant font but break any limitation of art against a light background, creating a striking contrast that exudes elegance and energy.
                    </li>
                      <li>
                         A distinctive feature of the design is the slanted "L" which adds a sense of motion and dynamism, as if symbolizing shining or behaving in your own way.
                      </li>
                      <li>
                        This unique element enhances the brand's visual identity, conveying speed, fluidity, and continuous progress.

                      </li>
                    
                    </ul>
                  </div>
                  
                </div>
                 <div className="pd-image">
              <img
                src="/project/KLVE/Differentlogo.jpg"
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
                <div className="pd-title">Brand Asset Design</div>
                   <p style={{marginTop: "1rem"}}>The brand asset design focuses on creating a cohesive visual identity that reflects the brand's values and resonates with the target audience using 3 main elements:</p>
                <div className="pd-box">
                    
                  <div className="pd-body">
                   <ul >
                      <li>
                        <span className="pd-bold">
                         Flower - 
                        </span>{" "}A symbol of beauty and growth. It reflects the natural elegance in everyone and celebrates personal evolution through style.
                    </li>
                      <li>
                         <span className="pd-bold">
                         Shining Star - 
                        </span>{" "}Represents individuality and the power to shine in your own unique way. We believe in bold self-expression and standing out with confidence.
                      </li>
                      <li>
                         <span className="pd-bold">
                         Heart - 
                        </span>{" "}A reminder to love yourself and honor your journey. Whether it’s success or struggle, everything you receive is a part of your story and it’s worth celebrating.

                      </li>
                    
                    </ul>
                  </div>
                  
                </div>
                 <div className="pd-image">
              <img
                src="/project/KLVE/Producttags.jpg"
                alt=""
              />
              <img
                src="/project/KLVE/Shop.jpg"
                alt=""
              />
              <img
                src="/project/KLVE/Producttag.jpg"
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
                <div className="pd-title">Marketing Strategy</div>
                <div className="pd-box">
                  <div className="pd-body">
                    <p>Developed a comprehensive marketing strategy to launch first collection and tell the story to more clients</p>
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
                    <div className="pd-pdf-banner__title">Marketing Plan Strategy</div>
                    <div className="pd-pdf-banner__hint">Click to preview in-page or open externally</div>
                  </div>
                  <div className="pd-pdf-banner__thumb">
                    <img src="/project/KLVE/Banner.jpg" alt="Marketing plan strategy preview" />
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
                <p>I created KLVE Studio after recognizing a gap in high-quality, mid-priced fashion in Canada. Through researching the industry, manufacturing costs, and consumer behavior, I learned how to balance bold design with practical business decisions to build a brand that expresses individuality while staying wearable. Developing KLVE Studio helped me understand how creativity and market strategy work together. I explored industry gaps, cost structures, and customer expectations, and used those insights to create a brand that celebrates individuality without sacrificing practicality.</p>
                
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
