import React from "react";
import './Messages.css';
import Botmessage from "../Bot/Botmessage";
import HumanMessage from "../Human/HumanMessage";
import Buttons from "../Options/scora_options";
import { useRef,useEffect } from "react";

const Messages=({messages})=>{
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

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
                <div className="start-message">Hello! I'm here to help with any questions you have</div>
            </div>
            <Buttons />
                {messages.map((message,index)=>(
                    message.sender==='bot'?
                    <Botmessage message={message.text} timestamp={formatTime(message.timestamp)}/>:
                    <HumanMessage message={message.text} timestamp={formatTime(message.timestamp)}/>))}
               <div ref={messagesEndRef} />
        </div>
    )

}

export default Messages