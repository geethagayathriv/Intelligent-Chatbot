import React from "react";
import './styleHuman.css'

const HumanMessage=({message,timestamp})=>{
    return(
        <div className="message-container human">
            <img src={`${process.env.PUBLIC_URL}/user.png`} alt='User' className="message-avatar"/>
            <div className="human-message">
                <div className='human-message-text'>{message}</div>
                <div className="human-message-time">{timestamp}</div>
            </div> 
        </div>
    )
}

export default HumanMessage;