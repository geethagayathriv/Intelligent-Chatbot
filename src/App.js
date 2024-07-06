import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Input from './components/Input/Input';
import Chatbotbox from './components/chatbox/Chatbotbox';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {

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
        const botMessage={
          text:response.data.response,
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

export default App;
