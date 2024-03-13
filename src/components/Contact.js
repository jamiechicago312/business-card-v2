import React from "react"
import Email from "../images/Email-Icon.png"
import LinkedIn from "../images/LinkedIn-Icon.png"

export default function Contact() {
    return (
        <nav className="Contact">
            <a href="mailto:thejamiesteinberg+website@gmail.com"><button className="Contact--Email"><img src={Email} className="Png--Email" />E-Mail</button></a>
            <a href="https://www.linkedin.com/in/steinbergjamie"><button className="Contact--LinkedIn"><img src={LinkedIn} className="Png--LinkedIn" />LinkedIn</button></a>
        </nav>

    )
}