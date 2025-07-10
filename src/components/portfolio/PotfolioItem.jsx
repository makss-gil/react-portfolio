import React from 'react'
import { useState } from 'react'
import PortfolioModal from './PortfolioModal'
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"


const PotfolioItem = ({ item, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <motion.div className="portfolio-img-card"
            custom={index}
            variants={slideInVariants("top", 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
        >
            <div className="img-card" onClick={openModal}>
                <div className="overlay"></div>
                <div className="info">
                    <h3 className="portfolio-title">{item.title}</h3>
                    <span className="portfolio-category">{item.category}</span>
                </div>
                <img className="portfolio-blur-img" src={item.imgSrc} alt={item.title} />

            </div>
            {isModalOpen && <PortfolioModal item={item} isModalOpen={isModalOpen} closeModal={closeModal} />}
        </motion.div>
    )
}

export default PotfolioItem