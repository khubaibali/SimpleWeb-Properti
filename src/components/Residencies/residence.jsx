import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './residence.css';
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';

// ... (other imports)

const Residence = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings r-container innerWidth">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButton />
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="r-card flexColStart">
                                    <img src={item.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{item.price}</span>
                                    </span>

                                    <span className="primaryText">{item.name}</span>
                                    <span className="secondaryText">{item.detail}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Residence;

const SliderButton = ()=> {
    const Swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button
            onClick={
                ()=>{
                    Swiper.slidePrev();
                }
            }
            >&lt;</button>
            <button
            onClick={
                ()=>{
                    Swiper.slideNext();
                }
            }
            >&gt;</button>
        </div>
    )    
}