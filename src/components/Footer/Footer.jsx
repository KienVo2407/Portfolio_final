import React from "react";
import "./Footer.scss";

import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-row">
                <div className="footer-contact">
                    <h3 style={{ fontSize: "3.5rem" }}>
                        Let’s Collaborate <br />
                        <span>@</span>kienvo.com
                    </h3>
                    <p className="secondary">
                        From a rough idea to impactful campaign - I'm always
                        ready for a creative collaborations. 
                    </p>

                    <div className="footer-contact-actions">
                        <Link to="/contact" className="btn">
                            Get in Touch
                        </Link>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/vo.kien.sae/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="mailto:vtk2407@gmail.com" target="_blank">
                                <FaEnvelope />
                            </a>
                            <a href="https://www.linkedin.com/in/trung-kien-vo-43906b292/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-nav">
                    <Link to= "/" className="footer-nav-item">
                        <span>Home</span>
                        <span>&#8594;</span>
                    </Link>

                    <Link to="/work" className="footer-nav-item">
                         <span>Work</span>
                         <span>&#8594;</span>
                    </Link>

                    <Link to="/about" className="footer-nav-item">
                        <span>About</span>
                        <span>&#8594;</span>
                    </Link>

                    <Link to="/contact" className="footer-nav-item">
                        <span>Contact</span>
                        <span>&#8594;</span>
                    </Link>

                    <Link to="/resume" className="footer-nav-item">
                        <span>Resume</span>
                        <span>&#8594;</span>
                    </Link>
                </div>
            </div>
            <div className="footer-row">
                <div className="footer-header">
                    <h1>Kien</h1>
                    <h1>Vo</h1>
                </div>

                <div className="footer-copyright-line">
                  <p className="primary sm">&copy; Handcode by Kien Vo 2025</p>  
                </div>
            </div>
        </div>
    )
};

export default Footer;