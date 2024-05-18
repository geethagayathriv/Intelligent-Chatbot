import React from "react";
import './Messages.css'
import bot_icon from '../../image/bot_icon.jpg'
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
                <img src={bot_icon} className="message-avatar"/>
                <div className="start-message">Hi I am chitti. How can I help you?</div>
            </div>
                {messages.map((message,index)=>(
                    message.sender==='bot'?
                    <Botmessage message={message.text} timestamp={formatTime(message.timestamp)}/>:
                    <HumanMessage message={message.text} timestamp={formatTime(message.timestamp)}/>))}
        </div>
    )

}

export default Messages



{/* <div 
                    key={index} 
                    className={`message-container ${message.sender==="bot"?"bot":"human"}`}
                >
                    <img 
                        src={message.sender==='bot'?bot_icon:user}
                        alt={message.sender} 
                        className="message-avatar"
                    />
                    <div className={`message ${message.sender==='bot'?'bot-message':'human-message'}`}>
                        <div className="message-text">{message.text}</div>
                        <div className="message-time">  {formatTime(message.timestamp)}</div>
                    </div>
                </div> */}