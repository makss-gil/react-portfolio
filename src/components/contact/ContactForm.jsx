import React from 'react';
import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form action="" className="form contact-form">
      <div className="first-row">
        <input placeholder="Name" type="text" />
      </div>
      <div className="second-row">
        <input placeholder="Email" type="email" />
        <input placeholder="Subject" type="text" />
      </div>
      <div className="third-row">
        <textarea placeholder="Message"></textarea>
      </div>
      <button className="contact-btn inner-info-linkk" type="submit">
        Send Message
          <FaPaperPlane />
      </button>
    </form>
  );
};

export default ContactForm;
