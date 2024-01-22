import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillCameraVideoFill, BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import './contact.css'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact</span>
                    <span className="primaryText">easy to connect us</span>
                    <span className="secondaryText">we always ready to provide you the best service belive a good blace to live can make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexColStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                            
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>

                        </div>


                        {/* Secondary Row */}
                        {/* <div className="flexColEnd row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillCameraVideoFill
                                            size={25}
                                        />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>+62 8781 890 1144</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                        </div> */}
                    </div>
                </div>


                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact