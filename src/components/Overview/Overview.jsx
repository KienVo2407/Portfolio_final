import React, { useState } from "react";
import "./Overview.scss";

const Overview = () => {
  const [active, setActive] = useState("ABOUT THE BRAND");

  const items = [
    {
      id: "ABOUT THE BRAND",
      title: "ABOUT THE BRAND",
      desc: "Analyze the brand's identity, values, and market positioning to inform design decisions.",
      icon: "/project/Overview/Overview_before.png",
      activeIcon: "/project/Overview/Overview_after.png",
      image: "/project/RejuvMD/Overview.png",
    },
    {
      id: "PROBLEMS",
      title: "PROBLEMS",
      desc: "Showcase the challenges faced by the brand that the project aims to address.",
      icon: "/project/Overview/Problem_before.png",
      activeIcon: "/project/Overview/Problem_after.png",
      image: "/project/RejuvMD/Problem_.png",
    },
    {
      id: "SOLUTION",
      title: "SOLUTION",
      desc: "Outline the strategies and design solutions implemented to overcome the identified problems.",
      icon: "/project/Overview/Solution_before.png",
      activeIcon: "/project/Overview/Solution_after.png",
      image: "/project/RejuvMD/Solution.png",
    },
    {
      id: "DELIVERABLE",
      title: "DELIVERABLE",
      desc: "Present the final outputs and results of the project, highlighting key features and benefits.",
      icon: "/project/Overview/Deliverables_before.png",
      activeIcon: "/project/Overview/Deliverables_after.png",
      image: "/project/RejuvMD/Deliverable.png",
    },
  ];

  const activeImage = items.find((i) => i.id === active)?.image;

  return (
    <section className="overview">
      {/* Badge */}
      <div className="overview-header">
        <div className="overview-badge">PROJECT OVERVIEW</div>
        <div className="overview-icon">✦</div>
      </div>

      {/* Top line */}
      <div className="overview-divider"></div>

      {/* 4 columns */}
      <div className="overview-grid">
        {items.map((item) => (
          <div
          key={item.id}
          className={`overview-item ${active === item.id ? "active" : ""}`}
          onClick={() => setActive(item.id)}
        >
          <div className="overview-item-icon-wrap">
            <img
              src={active === item.id ? item.activeIcon : item.icon}
              alt={item.title}
              className="overview-item-icon"
            />
          </div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>

      {/* Bottom line */}
      <div className="overview-divider"></div>

      {/* Image preview */}
      <div className="overview-image-wrapper">
        <img src={activeImage} alt={active} className="overview-image" />
      </div>
    </section>
  );
};

export default Overview;
