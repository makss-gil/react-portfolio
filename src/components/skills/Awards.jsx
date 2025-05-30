import awards from "../../data/awards"

const Awards = () => {
  return (
    <div className="education">
        <h4 className="label">Awards</h4>
        <ul className="education-list">

          {awards.map((item, index) => (
            
            <li className="item" key={index}>
                <span className="year">{item.year}</span>
                <p>{item.title} <span>"{item.institution}"</span></p>
            </li>
            
            ))}
        </ul>
    </div>
  )
}

export default Awards;