import React, { useState } from 'react';
import { FaPaperPlane } from "react-icons/fa6";
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react";
import SuccessToast from "./SuccessToast"; // шляхи адаптуй до себе



const ContactForm = () => {
  const [status, setStatus] = useState(""); // повідомлення (успіх або помилка)

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "744f4984-5c01-4318-a2e6-31deb73f6b89");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        form.reset(); // очищення полів
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Please check your internet connection.");
    }

    // очищення повідомлення через 5 сек
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <>
    <form className="form contact-form" onSubmit={onSubmit}>
      <motion.div className="first-row"
        custom={1}
        variants={slideInVariants("top", 0.7, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <input 
          placeholder="Name" 
          type="text"
          autoComplete="name" 
          name="name" required/>
      </motion.div>

      <motion.div className="second-row"
        custom={2}
        variants={slideInVariants("top", 0.7, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <input 
        placeholder="Email" 
        type="email" 
        autoComplete="email"
        name="email" required />
        <input placeholder="Subject" type="text" name="subject" required />
      </motion.div>

      <motion.div className="third-row"
        custom={3}
        variants={slideInVariants("top", 0.7, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <textarea placeholder="Message" name="message" required></textarea>
      </motion.div>

      <motion.button className="contact-btn inner-info-linkk" type="submit"
        custom={4}
        variants={slideInVariants("top", 0.7, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Send Message <FaPaperPlane />
      </motion.button>
    </form>
    <SuccessToast message={status} />
    </>
  );
};

export default ContactForm;
