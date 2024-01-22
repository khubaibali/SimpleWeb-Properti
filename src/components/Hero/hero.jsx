import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">

                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br />
                            Most Suitable <br /> Property</h1>
                    </div>

                    <div className="flexColStart hero-desk">
                        <span className="secondaryText">
                            Find a variety of properties that suit you very easily and quickly with us.
                        </span>
                        <span className="secondaryText">
                            We provide the best properties for you and your family.
                        </span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker
                            color="var(--blue)"
                            size={30}
                        />
                        <input
                            placeholder="Search location ..."
                            type="text" />
                        <button className="button">Location</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp
                                    start={8500}
                                    end={9000}
                                    duration={5}
                                />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Product</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp
                                    start={2400}
                                    end={2850}
                                    duration={5}
                                />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customer</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp
                                    start={12}
                                    end={24}
                                    duration={5}
                                />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winning</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>


            </div>
        </section>
    )

}

export default Hero;