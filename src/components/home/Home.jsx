import "./Home.css"
import { FaFacebookSquare, FaInstagramSquare, FaTelegram, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { FaArrowCircleRight, FaArrowDown } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { homeImg } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants, slideInVariants } from "../../utils/animation";



const icons = [
    { id:1, href: "https://www.facebook.com/maksim.gilituha/", icon: <FaFacebookSquare/> },
    { id:2, href: "https://www.instagram.com/makss_gil/", icon: <FaInstagramSquare/> },
    { id:3, href: "https://t.me/makssgil", icon: <FaTelegram/> },
    { id:4, href: "https://www.linkedin.com/in/maksym-hilitukha-931506359/", icon: <FaLinkedin/> },
    { id:5, href: "https://x.com/makss_gil", icon: <FaTwitterSquare/> },
    { id:6, href: "https://github.com/makss-gil", icon: <FaGithubSquare/> },
]

const Home = () => {
  return (
    <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((item, index) => (
                        <motion.a 
                            href={item.href}   
                            target="_blank"   
                            key={item.id}
                            custom={index}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                            >
                                {item.icon}
                        </motion.a>
                    ))}
                </div>
                <div className="home-info">
                    <h1>Hi, I am Gil</h1>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        viewport={{once: false, amount: 0.5}}
                        variants={slideInVariants("left", 0.7, 140, true)}>
                    Front-end developer
                    </motion.h3>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{once: false, amount: 0.5}}
                        variants={slideInVariants("left", 0.7, 120, true)}
                    >I'm an aspiring frontend developer who already builds clean and user-friendly websites.</motion.p>
                    <motion.a 
                        href="#contact" 
                        className="home-info-link inner-info-link"
                        initial="hidden"
                        whileInView="visible"
                        custom={2}
                        viewport={{once: false, amount: 0.5}}
                        variants={slideInVariants("left", 0.3, 50, true)}>
                            Contact me
                    <FaArrowCircleRight />
                    </motion.a>
                </div>
                <motion.div className="home-img"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0}}
                        variants={slideInVariants("right", 0.9, 100, false)}>
                <img src={homeImg} loading="lazy" alt="man" />
                </motion.div>
            </div>
            <a href="#about" className="scroll-down">
                scroll-down
                <FaArrowDown />
            </a>
        </section>
  )
}

export default Home