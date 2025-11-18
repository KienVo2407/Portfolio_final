import React, { useState } from "react";
import { galleryData } from "../../data/gallery";
import "./FilterGallery.scss";

const categories = ["All", "AI", "Case Study", "Marketing", "Content Creation"];

export default function FilterGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((project) => project.category === selectedCategory);

  return (
    <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <h1>Creative Pieces</h1>
        <p>
          Every project delivered with a reflection of my commitment to quality,
          <br /> designed to inspire and drive success.
        </p>
      </div>

      {/* Filter Menu */}
      <div className="filter-menu">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="project-grid">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="project-card"
            onClick={() => setActiveProject(item)} // 🔹 open modal
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            <button className="close-btn" onClick={() => setActiveProject(null)}>
              ✕
            </button>

            <h2>{activeProject.title}</h2>

            {activeProject.mediaType === "pdf" ? (
              <iframe
                src={activeProject.mediaUrl}
                title={activeProject.title}
                className="modal-media"
              />
            ) : activeProject.mediaType === "video" ? (
              <video
                src={activeProject.mediaUrl}
                className="modal-media"
                controls
                autoPlay
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
