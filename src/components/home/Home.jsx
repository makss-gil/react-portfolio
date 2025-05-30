import "./Home.css"

import { FaFacebookSquare, FaInstagramSquare, FaTelegram, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { FaArrowCircleRight, FaArrowDown } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { homeImg } from "../../assets/images";


const Home = () => {
  return (
    <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    <a href="https://www.facebook.com/maksim.gilituha/?locale=uk_UA" target="_blank">
                    <FaFacebookSquare />
                    </a>
                    <a href="https://www.instagram.com/makss_gil/" target="_blank">
                    <FaInstagramSquare />
                    </a>
                    <a href="https://github.com/makss-gil" target="_blank">
                    <FaGithubSquare />
                    </a>
                    <a href="https://t.me/makssgil" target="_blank">
                      <FaTelegram />
                    </a>
                    <a href="https://www.linkedin.com/in/maksym-hilitukha-931506359/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="">
                        <FaTwitterSquare />
                    </a>
                </div>
                <div className="home-info">
                    <h1>Hi, I am DevHilit</h1>
                    <h3>Front-end developer</h3>
                    <p>I'm a beginner in web development, but I already create nice and user-friendly websites.</p>
                    <a href="" className="home-info-link inner-info-link">Contact me
                    <FaArrowCircleRight />
                    </a>
                </div>
                <div className="home-img"><img src={homeImg} alt="man" />
                </div>
            </div>
            <a href="#about" className="scroll-down">
                scroll-down
                <FaArrowDown />
            </a>
        </section>
  )
}

export default Home