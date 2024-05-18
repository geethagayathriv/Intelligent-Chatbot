import './Input.css'

const Input=({inputRef,handleSend})=>{
    return(
        <div className="btm">
            <div className="input">
                <input
                    type="text"
                    id="input_text"
                    placeholder="Enter your Message"
                    ref={inputRef}/>
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