import "./Portfolio.css"
import portfolioData from "../../data/portfolioData"
import SectionTitle from "../sectionTitle/sectionTitle"
import PotfolioItem from "./PotfolioItem"

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
                <SectionTitle title="Portfolio" subtitle="Portfolio"/>
                <div className="portfolio-wrapper">
                {portfolioData.map(item => {
                    return (
                        <PotfolioItem key={item.id} item={item}/>
                    )
                })}
               
                    
                </div>
            </div>
        </section>
  )
}

export default Portfolio