import React from "react";
// import bot_icon from '\public\bot_icon.jpg'
import './styleBot.css'

const Botmessage=({message,timestamp})=>{
    return(
        <div className="message-container bot">
            <img src={`${process.env.PUBLIC_URL}/bot_icon.jpg`} alt='Bot' className="message-avatar"/>
            <div className="bot-message">
                <div className='bot-message-text'>{message}</div>
                <div className='bot-message-time'>{timestamp}</div>
            </div>
        </div>
    )
}
export default Botmessage;