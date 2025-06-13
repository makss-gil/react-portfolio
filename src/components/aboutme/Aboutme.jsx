import "./Aboutme.css"
import { aboutImg } from "../../assets/images"
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../../data/proflist";



const Aboutme = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About Me" subtitle="About Me" />
        <div className="about-wrapper">
          <motion.div className="about-img"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            variants={slideInVariants("left", 0.9, 100, false)}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <div className="about-info">
            <div className="description">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.5, 50, true)}
              >I'm Maksym Hilitukha</motion.h3>
              <motion.h4
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.5, 50, true)}
              >A Junior <span> Front-End developer</span> based in
                <span> Lutsk</span>
              </motion.h4>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={slideInVariants("right", 0.9, 60, true)}
              >I’m a student passionate about designing and developing stylish, modern websites and web apps focused on meaningful user experiences. Check out my portfolio.</motion.p>
            </div>
            <ul className="professional-list">
              {profList.map((item, index) => (
                <motion.li
                  className="list-item"
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  custom={0}
                  viewport={{ once: false, amount: 0.5 }}
                  variants={slideInVariants("right", 0.6, 40, true)}
                >
                  <span className="number">{item.number}</span>
                  <span className="text">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="/cv_maksym_hilitukha_frontend_developer.pdf"
              download="cv_maksym_hilitukha_frontend_developer.pdf"
              className="inner-info-link"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideInVariants("right", 0.7, 60, true)}
            >
              Download <FaDownload />
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme