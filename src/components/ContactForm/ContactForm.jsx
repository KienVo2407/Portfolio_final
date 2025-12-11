import React from "react";
import "./ContactForm.scss"

const ContactForm = () => {
    return(
        <div className="contact-form">
            <div className="contact-form-row">
                <div className="contact-form-row-copy-item">
                    <p className="primary sm">Let's create creative campaign together</p>
                </div>
                <div className="contact-form-row-copy-item">
                    <p className="primary sm">&copy; 2025</p>
                </div>
            </div>

            <div className="contact-form-row">
                <div className="contact-form-col">
                    <div className="contact-form-header">
                        <h3 style={{ fontSize: "3.5rem" }}>Connect to me</h3>

                        <p>
                            Have a fantastic idea in mind? Let's bring it to real life together.
                            I'd love to explore the journey with you !!!
                        </p>
                    </div>

                    <div className="contact-form-availability">
                        <p className="primary pm">Available for Freelance</p>
                        <p className="primary pm">Ready to join start-up team</p>
                    </div>
                </div>

                <div className="contact-form-col">
                    <div className="form-item">
                        <input type="text" placeholder="Name" />
                    </div>

                    <div className="form-item">
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="form-item">
                        <textarea type="text" rows={6} placeholder="Message" />
                    </div>

                    <div className="form-item">
                        <button className="btn">Send Message</button>
                    </div>
                 </div>

            </div>
        </div>
    )
};

export default ContactForm;