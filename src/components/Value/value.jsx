import React from 'react'
import './value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left Side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Values</span>
                    <span className='PrimaryText'>Value We Give To You</span>
                    <span className='secondaryText'>
                        We Always Ready To Help You To Find Your Dream Home
                        <br />
                        We Believe a Good Home Can Make Your Life Better
                    </span>

                    {/* Accordion */}
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, index) => {
                                const [className, setClassName] = React.useState(null)
                                return (
                                    <AccordionItem className={`accordion-item ${className}`} key={index} uuid={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordion-button'>

                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collap')
                                                    }
                                                </AccordionItemState>
                                                <div className="flexCenter icons">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown
                                                        size={20}
                                                    />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <span className="secondaryText">{item.detail}</span>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value