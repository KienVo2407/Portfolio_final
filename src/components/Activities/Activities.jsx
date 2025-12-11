import React, { useEffect, useRef } from "react";
import "./Activities.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const imagesRef = useRef([]);
  const labelsRef = useRef([]);

  // Activity data matching the image
  const activities = [
    {
      id: 1,
      image: "/about/portrait3.jpg",
      alt: "Personal style",
      type: "personal"
    },
    {
      id: 2,
      image: "/about/portrait1.jpg",
      alt: "Lake scene with nice building- photography hobby",
      type: "photography"
    },
    {
      id: 3,
      image: "/about/real.JPG",
      alt: "Real Estate",
      label: "actor",
      
    },
    {
      id: 4,
      image: "/about/acting2.jpg",
      alt: "Group photo in subway/metro station",
      type: "social"
    },
    {
      id: 5,
      image: "/about/cooking.jpg",
      alt: "Gourmet food plating - culinary interests",
      type: "culinary"
    },
    {
      id: 6,
      image: "/about/river.JPG",
      alt: "Person in casual setting - lifestyle",
      type: "lifestyle"
    },
    {
      id: 7,
      image: "./public/about/gym.PNG",
      alt: "Badminton court scene - sports activity",
      type: "gym"
    },
    {
      id: 8,
      image: "/about/badminton.jpg",
      alt: "Badminton playing - sports activity",
      type: "sports",
      label: "badminton player",
      labelPosition: "bottom-right"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const images = imagesRef.current;
    const labels = labelsRef.current;

    if (!section) return;

    // Generate random flying directions for each image
    const flyingDirections = images.map((_, index) => {
      const directions = [
        { x: -200, y: -150, rotation: -45 }, // Top-left
        { x: 200, y: -150, rotation: 45 },   // Top-right
        { x: -250, y: 0, rotation: -90 },    // Left
        { x: 250, y: 0, rotation: 90 },      // Right
        { x: -200, y: 150, rotation: -135 }, // Bottom-left
        { x: 200, y: 150, rotation: 135 },   // Bottom-right
        { x: 0, y: -200, rotation: 0 },      // Top
        { x: 0, y: 200, rotation: 180 }      // Bottom
      ];
      return directions[index % directions.length];
    });

    // Initial setup - hide title and labels, position images off-screen
    gsap.set([title, ...labels], { 
      opacity: 0,
      y: 30
    });

    // Set initial positions for flying images
    images.forEach((image, index) => {
      if (image) {
        const direction = flyingDirections[index];
        gsap.set(image, {
          opacity: 0,
          x: direction.x,
          y: direction.y,
          rotation: direction.rotation,
          scale: 0.3
        });
      }
    });

    // Create timeline for entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title first
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    // Flying images animation with stagger
    tl.to(images, {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 1.2,
      stagger: {
        amount: 0.8,
        from: "random"
      },
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Add a subtle bounce effect after landing
    tl.to(images, {
      scale: 1.05,
      duration: 0.2,
      stagger: {
        amount: 0.3,
        from: "random"
      },
      ease: "power2.out"
    }, "-=0.3");

    tl.to(images, {
      scale: 1,
      duration: 0.3,
      stagger: {
        amount: 0.3,
        from: "random"
      },
      ease: "power2.out"
    }, "-=0.1");

    // Animate labels last
    tl.to(labels, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    // Add hover animations for images (only hover effects, no continuous movement)
    images.forEach((image, index) => {
      if (image) {
        const imageElement = image.querySelector('.activity-image');
        const overlay = image.querySelector('.activity-overlay');

        gsap.set(overlay, { opacity: 0, scale: 0.8 });

        // Simple hover animation - no continuous floating
        image.addEventListener('mouseenter', () => {
          gsap.to(imageElement, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(overlay, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(imageElement, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(overlay, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // ... deleted code ... (removed continuous floating animation)
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="activities">
      <div className="activities-container">
        {/* Title Section */}
        <div ref={titleRef} className="activities-title">
          <h2>When I'm Not A</h2>
          <h2 className="highlight">Marketer...</h2>
        </div>

        {/* Images Grid */}
        <div ref={gridRef} className="activities-grid">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              ref={el => imagesRef.current[index] = el}
              className={`activity-item ${activity.type}`}
            >
              <div className="activity-image-wrapper">
                <img 
                  src={activity.image} 
                  alt={activity.alt}
                  className="activity-image"
                />
                <div className="activity-overlay">
                  <div className="activity-type">
                    {activity.type}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Labels with arrows */}
          <div 
            ref={el => labelsRef.current[0] = el}
            className="activity-label actor-label"
          >
            <span className="label-text">actor</span>
            <div className="label-arrow actor-arrow"></div>
          </div>

          <div 
            ref={el => labelsRef.current[1] = el}
            className="activity-label badminton-label"
          >
            <span className="label-text">badminton player</span>
            <div className="label-arrow badminton-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
