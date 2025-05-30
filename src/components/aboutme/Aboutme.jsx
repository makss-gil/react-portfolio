import "./Aboutme.css"
import { aboutImg } from "../../assets/images"
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/sectionTitle";


const Aboutme = () => {
  return (
    <section className="about section" id="about">
            <div className="container flex-center">
              <SectionTitle title="About Me" subtitle="About Me"/> 
                {/* <h2 className="inner-title">About Me</h2>
                <h3 className="inner-second-title">About Me</h3> */}
                <div className="about-wrapper">
                    <div className="about-img">
                      <img src={aboutImg} alt="about"/>
                    </div>
                    <div className="about-info">
                      <div className="description">
                        <h3>I'm Maksym Hilitukha</h3>
                        <h4>A Junior <span> Front-End developer</span> based in 
                          <span> Lutsk</span>
                        </h4>
                        <p>I design and develop services for customers specializing creating stylish, modern websites, web services user experiences through meaningful interactions. Check out my Portfolio</p>
                      </div>
                      <ul className="professional-list">
                        <li className="list-item">
                          <span className="number">1</span>
                          <span className="text">Years of experiences</span>
                        </li>
                        <li className="list-item">
                          <span className="number">0</span>
                          <span className="text">Happy customers</span>
                        </li>
                        <li className="list-item">
                          <span className="number">0</span>
                          <span className="text">Success Projects</span>
                        </li>
                      </ul>
                      <a href="#" className="inner-info-link">
                        Download <FaDownload />
                      </a>
                    </div>
                  </div>
            </div>
        </section>
  )
}

export default Aboutme