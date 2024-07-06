import React from "react";
import './Messages.css'
// import bot_icon from '../../image/bot_icon.jpg'
import Botmessage from "../Bot/Botmessage";
import HumanMessage from "../Human/HumanMessage";

const Messages=({messages})=>{
    const formatTime=(timestamp)=>{
        const date=new Date(timestamp);
        const hours=date.getHours();
        const minutes=date.getMinutes();
        return `${hours}:${minutes<10?'0':''}${minutes}`
    }

    return(
        <div className="messages">
            <div className="initial-message">
                <img src={`${process.env.PUBLIC_URL}/bot_icon.jpg`} className="message-avatar"/>
                <div className="start-message">Hi I am Scora your personal scora assistant. How can I help you?</div>
            </div>
                {messages.map((message,index)=>(
                    message.sender==='bot'?
                    <Botmessage message={message.text} timestamp={formatTime(message.timestamp)}/>:
                    <HumanMessage message={message.text} timestamp={formatTime(message.timestamp)}/>))}
        </div>
    )

}

export default Messages



