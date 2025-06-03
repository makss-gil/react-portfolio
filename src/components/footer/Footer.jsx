import { followLinks, infoLinks } from "../../data/footerData"
import "./Footer.css"
import FooterLinkGroup from "./FooterLinkGroup"



const Footer = () => {

const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>DevHilit</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={infoLinks} isSocial={false}/>
        
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks} isSocial={true}/>
        
      </div>
      <p className="footer-copyright">© <span className="year">{currentYear}</span> by Hilitukha Maksym (DevHilit). All rights reserved.</p>
    </footer>
  )
}

export default Footer