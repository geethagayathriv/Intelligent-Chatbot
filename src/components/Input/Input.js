import './Input.css'

const Input=({inputRef,handleSend})=>{
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSend(); // Call handleSend function when Enter is pressed
        }
    };
    return(
        <div className="btm">
            <div className="input">
                <input
                    type="text"
                    id="input_text"
                    placeholder="Enter your Message"
                    ref={inputRef}
                    onKeyDown={handleKeyPress}/>

            </div>
            <div className="btn">
                <button className="send-btn" onClick={handleSend}>
                    <i className="fa fa-paper-plane"></i>Send
                </button>
            </div>
        </div>
        
    )
}

export default Input;