import React from "react";
import image from '../../image/chatbox_icon.png'
import './Chatbotbox.css'
const Chatbotbox=({toggleChatbox})=>{
    return(
        <div className="chatbox_button">
            <button className="chatbox-btn" onClick={toggleChatbox}><img src={image}  alt="" className="chat-icon"/></button>
        </div>
    )
}
export default Chatbotbox