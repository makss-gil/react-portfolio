import React from 'react'
import contactData from '../../data/contactData'


const ContactLeft = () => {
    return (
        <div className="contact-left">
            <h2>Let's discuss your projects</h2>
            <ul className="contact-list">
                {contactData.map(item => (
                    <li key={item.id}>
                        <h3><item.icon />{item.title}</h3>
                        <span><a href={item.link}>{item.value}</a></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactLeft