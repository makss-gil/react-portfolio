import "./GetInTouch.css"
import React from 'react'
import { FaPaperPlane } from "react-icons/fa6";
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"

const GetInTouch = () => {
  return (
    <div className="get-in-touch sub-section">
        <div className="container flex-center">
            <div className="contact-card">
                <motion.div className="title"
                    variants={slideInVariants("left", 0.6, 90, false)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h4>LAT'S TALK</h4>
                    <h3>ABOUT YOUR</h3>
                    <h2>NEXT PROJECT</h2>
                </motion.div>
                <motion.a href="#contact" className="get-in-touch-link inner-info-link"
                    variants={slideInVariants("right", 0.6, 80, false)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >Contact me 
                    <FaPaperPlane />
                </motion.a>
            </div>
        </div>
    </div>  
  )
}

export default GetInTouch