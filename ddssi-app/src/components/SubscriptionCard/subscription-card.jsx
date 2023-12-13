import React from 'react'
import { MainContainer } from './subscription-card-styles'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubscriptionCard = ({ header, title, price, description, color }) => {

    const [click, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!click);
    }

    return (
        <MainContainer color={color} click={click}> 
            <div className='card-header'>
                <p className='uppercase font-semibold'>{header}</p>
                <span className='uppercase font-semibold title'>{title}</span>
                <div className='price-container'>
                    <span className='price'>{price}</span>
                </div>
                <div className="circle" />
            </div>
            <br /><br />
            <span className='descritpion text-[#7a7a7a] text-sm'>{description}</span>
            <br />
            
            {/* <div className="accordion">
                <div className='accordion-body flex items-center text-[#7a7a7a] cursor-pointer'>
                    <span>{inclusion}</span>
                </div>
                <div className="accordion-header flex items-center cursor-pointer gap-1" onClick={handleClick}>
                    {click ? <span className='text-sm'>See less</span> : <span className='text-sm'>See more </span>}
                    {click ? <IoIosArrowUp /> : <IoIosArrowDown />} 
                </div>
                
            </div> */}
           
        </MainContainer>
    )
}

export default SubscriptionCard