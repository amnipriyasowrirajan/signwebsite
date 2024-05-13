import React from "react";
import "../pages/Contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">
            <FaMapMarkerAlt />
            Address:
          </span>
          <p>1895 Clements Rd Pickering,ON L1W 3V5</p>
        </div>
        <div className="contact-item">
          <span className="contact-label">
            <FaPhoneVolume />
            Phone:
          </span>
          <p>(905) 427-0101</p>
        </div>
        <div className="contact-item">
          <span className="contact-label">
            <MdAttachEmail />
            Email:
          </span>
          <p>signifycreations@gmail.com</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4795555202345!2d-79.0572005253231!3d43.82515364129465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4dffe682eb675%3A0x96fc41ea5e98919b!2s1895%20Clements%20Rd%2C%20Pickering%2C%20ON%20L1W%203V5!5e0!3m2!1sen!2sca!4v1715525149525!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
