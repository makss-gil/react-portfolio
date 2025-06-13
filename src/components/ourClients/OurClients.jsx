import React from 'react'
import clientData from '../../data/clientsData'
import './OurClients.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SectionTitle from "../sectionTitle/SectionTitle"
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"

const OurClients = () => {

    return (
        <section className="section our-client" id="clients">
            <div className="container flex-center">
                <SectionTitle title="Our Clients" subtitle="Our Clients" />
                <motion.div className="our-client-wrapper"
                    variants={slideInVariants("bottom", 0.6, 60, false)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="client-swiper"
                    >

                        {clientData.map(client => (
                            <SwiperSlide key={client.id}>
                                <div className="swiper-slide swiper-client-block">
                                    <div className="client-img">
                                        <img src={client.imgSrc} alt={client.name} />
                                    </div>
                                    <div className="client-details">
                                        <p>{client.description}</p>
                                        <h3>{client.name}</h3>
                                        <span>{client.position}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default OurClients