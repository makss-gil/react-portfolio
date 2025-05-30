import "./SectionTitle.css"
import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <>
    <h2 className="inner-title">{title}</h2>
    <h3 className="inner-second-title">{subtitle}</h3>   
    </>
  )
}

export default SectionTitle