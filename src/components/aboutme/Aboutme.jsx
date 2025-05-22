import "./Aboutme.css"


import { aboutImg } from "../../assets/images"

const Aboutme = () => {
  return (
    <div className="Aboutme">
        <h1>Aboutme</h1>
        <img src={aboutImg} alt="" />
    </div>
  )
}

export default Aboutme