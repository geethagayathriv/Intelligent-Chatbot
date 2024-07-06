import React from "react";
// import image from '/public/chatbox_icon.png'
import './Chatbotbox.css'
const Chatbotbox=({toggleChatbox})=>{
    return(
        <div className="chatbox_button">
            <button className="chatbox-btn" onClick={toggleChatbox}><img src={`${process.env.PUBLIC_URL}/chatbox_icon.png`}  alt="" className="chat-icon"/></button>
        </div>
    )
}
export default Chatbotbox