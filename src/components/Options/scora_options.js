import React from "react";
import './options.css'

const Buttons=()=>{
    return(
        <div className="nav-buttons">
            <div className="top-buttons">
                <button className="opt"><a href="https://scora.io/platform/" target="blank">Platform</a></button>
                <button className="opt"><a href="https://scora.io/scenarios/" target="blank">Scenarios</a></button>
                <button className="opt"><a href="https://scora.io/contact/#leads" target="blank">Demo</a></button>
            </div>
            <div className="bottom-buttons">
                <button className="opt"><a href="https://scora.io/features/" target="blank">Features</a></button>
                <button className="opt"><a href="https://scora.io/pricing/" target="blank">Pricing</a></button>
            </div>
        </div>
    )
}

export default Buttons;