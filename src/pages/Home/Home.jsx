import workList from "../../data/workList";
import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import FilterGallery from "../../components/FilterGallery/FilterGallery";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Transition from "../../components/Transition/Transition"
import ReactLenis from "lenis/react";

import BannerVideo from "../../../public/videos/hero-bg.mp4"


gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  const stickyTitlesRef = useRef(null);
  const titlesRef = useRef([]);
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  //  const leftImagesRef = useRef([]); 
  // const rightImagesRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const stickySection = stickyTitlesRef.current;
    const titles = titlesRef.current.filter(Boolean);

    if (!stickySection || titles.length !== 3) {
      window.removeEventListener("resize", handleResize);
      return;
    }
     // Set initial states for titles
    gsap.set(titles[0], { opacity: 1, scale: 1 });
    gsap.set(titles[1], { opacity: 0, scale: 0.75 });
    gsap.set(titles[2], { opacity: 0, scale: 0.75 });

    // Set initial states for images (hidden and positioned off-screen)
    // gsap.set(leftImages, { opacity: 0, x: -100, scale: 0.8 });
    // gsap.set(rightImages, { opacity: 0, x: 100, scale: 0.8 });

    // Add scroll indicator animation
    const scrollIndicator = scrollIndicatorRef.current;
    if (scrollIndicator) {
      // Animate the scroll indicator
      gsap.to(scrollIndicator, {
        y: 10,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Fade out scroll indicator as user scrolls
      gsap.to(scrollIndicator, {
        opacity: 0,
        scrollTrigger: {
          trigger: stickySection,
          start: "top top",
          end: "+=100",
          scrub: true
        }
      });
    }

    const pinTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${window.innerHeight * 5}`,
      pin: true,
      pinSpacing: true,
    });

    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection,
        start: "top top",
        end: `+=${window.innerHeight * 4}`,
        scrub: 0.5,
      },
    });

    masterTimeline
      .to(
        titles[0],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        1
      )

      .to(
        titles[1],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        1.25
      );

    
    masterTimeline
      .to(
        titles[1],
        {
          opacity: 0,
          scale: 0.75,
          duration: 0.3,
          ease: "power2.out",
        },
        2.5
      )

      .to(
        titles[2],
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        },
        2.75
      );

      // // Image animations - First set appears with first title
      // masterTimeline
      // .to(
      //   [leftImages[0], rightImages[0]],
      //   {
      //     opacity: 1,
      //     x: 0,
      //     scale: 1,
      //     duration: 0.4,
      //     ease: "power2.out",
      //   },
      //   0.5
      // )
      // // First set disappears
      // .to(
      //   [leftImages[0], rightImages[0]],
      //   {
      //     opacity: 0,
      //     x: -50,
      //     scale: 0.9,
      //     duration: 0.3,
      //     ease: "power2.in",
      //   },
      //   1.2
      // )
      // // Second set appears with second title
      // .to(
      //   [leftImages[1], rightImages[1]],
      //   {
      //     opacity: 1,
      //     x: 0,
      //     scale: 1,
      //     duration: 0.4,
      //     ease: "power2.out",
      //   },
      //   1.5
      // )
      // // Second set disappears
      // .to(
      //   [leftImages[1], rightImages[1]],
      //   {
      //     opacity: 0,
      //     x: 50,
      //     scale: 0.9,
      //     duration: 0.3,
      //     ease: "power2.in",
      //   },
      //   2.7
      // )
      // // Third set appears with third title
      // .to(
      //   [leftImages[2], rightImages[2]],
      //   {
      //     opacity: 1,
      //     x: 0,
      //     scale: 1,
      //     duration: 0.4,
      //     ease: "power2.out",
      //   },
      //   3
      // );

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      pinTrigger.kill();
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      if (masterTimeline.scrollTrigger) {
        masterTimeline.scrollTrigger.kill();
      }
      masterTimeline.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  //   // Image data for each title section
  // const sectionImages = [
  //   {
  //     left: "/project/Design/poster1.jpg",
  //     right: "/project/Design/poster2.jpg"
  //   },
  //   {
  //     left: "/project/Design/poster3.jpg", 
  //     right: "/project/Design/poster4.jpg"
  //   },
  //   {
  //     left: "/project/Design/poster5.jpg",
  //     right: "/project/Design/poster6.jpg"
  //   }
  // ];

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            {/* <img src="/about/baby.JPG" alt="Baby" /> */}
            <video width="100%" src={BannerVideo} autoPlay muted loop></video>
          </div>

          <div className="hero-header">
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
              Kien
            </AnimatedCopy>
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.8}>
              Vo
            </AnimatedCopy>
          </div>
        </section>

        <section ref={stickyTitlesRef} className="sticky-titles">
          <div className="sticky-titles-nav">
            <p className="primary sm">About Me!</p>
            <p className="primary sm">Marketing Through Storytelling</p>
          </div>
          <div className="sticky-titles-footer">
            <p className="primary sm">Storytelling Through Video</p>
            <p className="primary sm">Open to Collaborations</p>
          </div>

            {/* Left side images */}
          {/* <div className="sticky-side-images left">
            {sectionImages.map((imageSet, index) => (
              <div 
                key={`left-${index}`}
                ref={(el) => (leftImagesRef.current[index] = el)}
                className="side-image"
              >
                <img src={imageSet.left} alt={`Design poster ${index + 1}`} />
              </div>
            ))}
          </div> */}

          {/* Right side images */}
          {/* <div className="sticky-side-images right">
            {sectionImages.map((imageSet, index) => (
              <div 
                key={`right-${index}`}
                ref={(el) => (rightImagesRef.current[index] = el)}
                className="side-image"
              >
                <img src={imageSet.right} alt={`Design poster ${index + 1}`} />
              </div>
            ))}
          </div> */}

          <h2 ref={(el) => (titlesRef.current[0] = el)}>
          Using <span className="hightlight">design</span>,<span className="hightlight">strategy</span>,and <span className="hightlight">storytelling</span> to connect
          </h2>
          <h2 ref={(el) => (titlesRef.current[1] = el)}>
            Each project is driven by <span className="hightlight">emotion</span>, <span className="hightlight">clarity</span>,and <span className="hightlight">vision</span> 
          </h2>
          <h2 ref={(el) => (titlesRef.current[2] = el)}>
            This portfolio is a glimpse into work and life story
          </h2>

           {/* scroll indicator */}
          <div ref={scrollIndicatorRef} className="scroll-indicator">
            <div className="scroll-icon">
              <div className="scroll-wheel"></div>
            </div>
            <p className="primary sm">Scroll to explore</p>
          </div>
          
        </section>

        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
        
          <AnimatedCopy>
              <img src="/about/Logo.png" alt="Logo" />
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to={work.route || "RejuvMD"}
                key={work.id}
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>
      
        <FilterGallery /> 
        

        
      <Reviews />
      <ContactForm />
      <Footer />      
      </div>
      
      
    </ReactLenis>
  );
};

export default Transition(Home);
