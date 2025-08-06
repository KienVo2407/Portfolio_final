import projects from "../../data/projects";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Work.scss";

import { gsap } from "gsap";

import Transition from "../../components/Transitition/Transition"

const Work = () => {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const carouselDescriptionRef = useRef(null);
    const carouselTitleRef = useState(null);
    const workSliderImgRef = useState(null)
    const descriptionTextRef = useRef(null);
    const titleTextRef = useRef(null);
    const imageRef = useRef(null);
    const navigate = useNavigate();

    const animateCarouselInfo = (newProject) => {
        const tl = gsap.timeline();
    }


    return (
        <div>

        </div>
    );
};
export default Transition(Work);