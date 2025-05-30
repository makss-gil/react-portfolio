import workExperience from "../../data/workExperience"

const WorkExperience = () => {
  return (
    <div className="education work-exp">
      <h3 className="work-exp-title">Work & Expirience</h3>
          <div className="skills-info">

            {workExperience.map((item, index) => (
              <div className="experience-card" key={item.id}>
                  <div className="upper">
                      <h3>{item.title}</h3>
                      <h5>{item.employmentType}</h5>
                      <span>{item.period}</span>
                      <div className="hr"></div>
                  </div>
                  <h4 className="label">{item.company}</h4>
                  <p>{item.description}</p>
              </div>
            ))}

          </div>
      </div>
  )
}

export default WorkExperience;