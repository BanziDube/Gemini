import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return(
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Banzi</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see in an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How you can become a better full-stack developer</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How software has revolutionised the world of aviation</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>10 Extensions every developer should have</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.Your privacy is important to us. Gemini does not store personal information or conversations. For more details, see our <span>Privacy Policy</span> and <span>Terms of Service</span>.
                        
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Main