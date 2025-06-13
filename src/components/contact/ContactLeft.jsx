import React from 'react'
import contactData from '../../data/contactData'
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"

const ContactLeft = () => {
    return (
        <div className="contact-left">
            <motion.h2
                variants={slideInVariants("left", 0.6, 60, false)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >Let's discuss your projects</motion.h2>
            <ul className="contact-list">
                {contactData.map((item, index) => (
                    <motion.li key={item.id}
                        variants={slideInVariants("top", 0.7, 50, true)}
                        initial="hidden" 
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={index}
                    >
                        <h3><item.icon />{item.title}</h3>
                        <span><a href={item.link}>{item.value}</a></span>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default ContactLeft