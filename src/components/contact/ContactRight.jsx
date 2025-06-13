import React from 'react'
import ContactForm from './ContactForm';
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"


const ContactRight = () => {
    return (
        <div className="contact-right">
            <motion.p
                variants={slideInVariants("right", 0.6, 60, false)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >I'm always open to discussing product <span>design work or partnerships.</span></motion.p>
            <ContactForm />
            
        </div>    
    )
}

export default ContactRight;