import React from "react";
import user from '../../image/user.png'
import './styleHuman.css'

const HumanMessage=({message,timestamp})=>{
    return(
        <div className="message-container human">
            <img src={user} alt='User' className="message-avatar"/>
            <div className="human-message">
                <div className='human-message-text'>{message}</div>
                <div className="human-message-time">{timestamp}</div>
            </div> 
        </div>
    )
}
export default HumanMessage;