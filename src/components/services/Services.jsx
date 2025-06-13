import ServiceItem from "./ServiceItem";
import "./Services.css";
import services from "../../data/services";
import SectionTitle from "../sectionTitle/sectionTitle";
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"

const Services = ({ isServiceModalOpen, setIsServiceModalOpen }) => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subtitle="Services" />
        <div className="services-wrapper">
          <motion.h3 className="services-description"
          custom={1}
          variants={slideInVariants("left", 0.6, 50, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          >What I Provide</motion.h3>
          <ul className="services-list">
            <ServiceItem
              services={services}
              setIsServiceModalOpen={setIsServiceModalOpen}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
