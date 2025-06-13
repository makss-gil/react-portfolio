import workExperience from "../../data/workExperience"
import { slideInVariants } from "../../utils/animation";
import { motion } from "motion/react"

const WorkExperience = () => {
  return (
    <div className="education work-exp">
      <motion.h3
        className="work-exp-title"
        custom={1}
        variants={slideInVariants("left", 0.6, 50, true)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        Work & Experience</motion.h3>
      <div className="skills-info">

        {workExperience.map((item, index) => (
          <motion.div
            className="experience-card"
            key={index}
            custom={index}
            variants={slideInVariants("top", 0.6, 50, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="upper">
              <h3>{item.title}</h3>
              <h5>{item.employmentType}</h5>
              <span>{item.period}</span>
              <div className="hr"></div>
            </div>
            <h4 className="label">{item.company}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default WorkExperience;