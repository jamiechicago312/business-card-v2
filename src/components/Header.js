import React from "react"
import Headshot from "../images/headshot.jpg"

export default function Header() {

    return(
        <div className="Header">
            <img src={Headshot} />
            <h1>Jamie Chicago</h1>
            <h3><a href="http://jamiechicago.com">jamiechicago.com</a></h3> 
        </div>
    )
}