import React from 'react'
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './footer.css'

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className="paddings innerWidth f-container">
                <div className="flexCenter f-row">
                    <a
                    href="#">
                        <FaFacebook
                            size={40}
                            color='var(--blue)'
                        />
                    </a>
                    <a 
                    href="#">
                        <FaInstagramSquare
                            size={40}
                            color='var(--blue)'
                        />
                    </a>
                    <a 
                    href="#">
                        <MdEmail
                            size={40}
                            color='var(--blue)'
                        />
                    </a>
                    <a 
                    href="#">
                        <FaWhatsapp
                            size={40}
                            color='var(--blue)'
                        />
                    </a>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
        </section>

    )
}

export default Footer