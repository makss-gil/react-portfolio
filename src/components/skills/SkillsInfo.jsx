import SectionTitle from "../sectionTitle/sectionTitle"
import Awards from "./Awards"
import Education from "./Education"
import Skills from "./Skills"
import "./Skills.css"
import WorkExperience from "./WorkExperience"


const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
            <div className="container flex-center">
                <SectionTitle title="Skills" subtitle="Skills"/>
                <div className="inner-content">
                        <div className="skills-description">
                            <h3>Education & Skills</h3>
                            <p>I'm just starting my journey in web development, but I'm learning consistently and gaining experience with modern technologies.</p>
                        </div>
                        <div className="skills-info education-all">
                            <Education />
                            <Skills />
                            <Awards />
                        </div>
                        <WorkExperience />
                </div>
            </div>
        </section>
  )
}

export default SkillsInfo;