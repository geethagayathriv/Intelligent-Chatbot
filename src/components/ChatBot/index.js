import './index.css';
import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import Chatbotbox from '../chatbox/Chatbotbox'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function ChatBot() {

    const [isChatboxOpen,setIsChatboxOpen]=useState(false)
    const [status,setSatus]=useState('Not Active')
    const [messages,setMessages]=useState([])
    const [isLoading, setIsLoading] = useState(false);
    const inputRef=useRef();  

    const toggleChatbox=()=>{
      setIsChatboxOpen(!isChatboxOpen)
    }
    useEffect(()=>{
      if(isChatboxOpen){
        setSatus('Active');
      }
      else{
        setSatus('Not Active')
      }
    },[isChatboxOpen]);

    const handleSend=async()=>{
      const userMessage=inputRef.current.value;
      if(!userMessage.trim()) return;
      const newMessage=[...messages,{sender:'human',text:userMessage,timestamp:new Date().toISOString()}];
      setMessages(newMessage)
      inputRef.current.value="";
      setIsLoading(true);
      console.log(messages)
      try{
        const endPoint='http://localhost:8000/chat'
        const response=await axios.post(endPoint,{
          question: userMessage,
      });
        console.log(response)
        const formattedResponse = formatResponse(response.data.response);
        const botMessage={
          text:formattedResponse,
          sender:'bot',
          timestamp:new Date().toISOString()
        }
        setMessages(prevMessages=>[...prevMessages,botMessage])
      }
      catch(error){
        console.log('error sending message: ',error)
      }
      finally {
        setIsLoading(false); // Set loading state to false
      }
    }

    const formatResponse = (response) => {
      const lines = response.split('\n');
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return lines.map((line, index) => {
          if (line.trim().startsWith('*')) {
              return (
                  <ul key={index} className="formatResponse">
                      <li className="formatResponse">
                          {line.replace(/^[*]/, '').trim().split(urlRegex).map((part, partIndex) =>
                              urlRegex.test(part) ? (
                                  <a className='formatResponse' key={partIndex} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
                              ) : (
                                  part
                              )
                          )}
                      </li>
                  </ul>
              );
          } else {
              return (
                  <p key={index} className="formatResponse">
                      {line.trim().split(urlRegex).map((part, partIndex) =>
                          urlRegex.test(part) ? (
                              <a className='formatResponse' key={partIndex} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
                          ) : (
                              part
                          )
                      )}
                  </p>
              );
          }
      });
  };

  return (
    <div className="App">
      <div className={`wrapper ${isChatboxOpen?'open':'closed'}`}>
          <div className="content">
            <Header name="ChatBot" status={status} closeChat={toggleChatbox}/>
          </div>
          <div className="main">
            <div className="main_content">
              <Messages messages={messages}/>
              {isLoading && <div className="loading-dots">...</div>}
            </div>
            <div className="bottom"> 
              <Input inputRef={inputRef} handleSend={handleSend}/>
            </div>
          </div>
        </div>
        <div className="chatbot_icon">
        <Chatbotbox isOpen={isChatboxOpen} toggleChatbox={toggleChatbox}/>
      </div>
    </div>
  );
}

export default ChatBot;