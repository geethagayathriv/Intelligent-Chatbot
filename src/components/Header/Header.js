import React from 'react';
// import image from '/public/bot_image.png'
import './Header.css'

const Header=({name,status,closeChat})=>{
    const stylestatus={
        color:status==='Active'?'green':'red'
    }
    return(
        <div className='header'>
            <div className='top-header'>
                <div className='image'>
                    <img src={`${process.env.PUBLIC_URL}/bot_image.png`} alt='image'/>
                </div>
                <div className='chatbot-head'>
                    <div className='name'>{name}</div>
                    <div className='status' style={stylestatus}>{status}</div>
                </div>
            </div>
            <div className='close'>
                <button className='close-btn' onClick={closeChat}><i className="fa-solid fa-xmark" id='x'></i></button>
            </div>
        </div>
    )
}

export default Header;