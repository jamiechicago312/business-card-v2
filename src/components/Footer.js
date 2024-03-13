import React from "react"
import GitHub from "../images/GitHub-Icon.png"
import Twitter from "../images/Twitter-Icon.png"
import Farcaster from "../images/Farcaster-icon.png"

export default function Footer() {
    return(
        <div className="Footer">
            <ul>
                <li><a href="https://github.com/jamiechicago312"><img src={GitHub} /></a></li>
                <li><a href="https://warpcast.com/chicago"><img src={Farcaster} /></a></li>
                <li><a href="https://twitter.com/jamiechicago312"><img src={Twitter} /></a></li>
            </ul>
        </div>
    )
}