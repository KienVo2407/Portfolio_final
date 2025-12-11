import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import projects from "../../data/projects";
import "./Work.scss";
import Footer from "../../components/Footer/Footer";

export default function Work() {
  const workContainer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Initialize Lenis (smooth scroll)
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Build project elements
    const container = workContainer.current;
    if (!container) return;
    container.innerHTML = "";

    const createWorkItem = (project) => {
      const div = document.createElement("div");
      div.className = "work-item";
      div.innerHTML = `
        <a href="${project.route}" class="work-item-link">
          <div class="work-item-img">
            <img src="${project.image}" alt="${project.title}" />
          </div>
          <div class="work-item-copy">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </a>
      `;
      return div;
    };

    // ✅ Build rows (2 per row)
    for (let i = 0; i < projects.length; i += 2) {
      const row = document.createElement("div");
      row.className = "row";
      row.appendChild(createWorkItem(projects[i]));
      if (projects[i + 1]) row.appendChild(createWorkItem(projects[i + 1]));
      container.appendChild(row);
    }

    // ✅ GSAP Animation after DOM render
    const rows = container.querySelectorAll(".row");
    gsap.set(".work-item", { y: 1000 });

    rows.forEach((row) => {
      const items = row.querySelectorAll(".work-item");

      items.forEach((item, i) => {
        const isLeft = i === 0;
        gsap.set(item, {
          rotation: isLeft ? -60 : 60,
          transformOrigin: "center center",
        });
      });

      ScrollTrigger.create({
        trigger: row,
        start: "top 75%",
        onEnter: () => {
          gsap.to(items, {
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0.25,
          });
        },
      });
    });

    // ✅ Important: Refresh ScrollTrigger after layout
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="work-page">
      <header>
        <h1>Featured Work</h1>
      </header>

      <section ref={workContainer} className="work"></section>

      <Footer />
    </div>
  );
}
