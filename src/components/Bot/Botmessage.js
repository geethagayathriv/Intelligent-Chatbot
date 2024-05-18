import React from "react";
import bot_icon from '../../image/bot_icon.jpg'
import './styleBot.css'

const Botmessage=({message,timestamp})=>{
    return(
        <div className="message-container bot">
            <img src={bot_icon} alt='Bot' className="message-avatar"/>
            <div className="bot-message">
                <div className='bot-message-text'>{message}</div>
                <div className='bot-message-time'>{timestamp}</div>
            </div>
        </div>
    )
}
export default Botmessage;