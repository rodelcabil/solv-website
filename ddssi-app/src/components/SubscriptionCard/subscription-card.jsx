import React from 'react'
import { AvailButton, MainContainer } from './subscription-card-styles'
import { useState } from 'react'

import Discount from '../../assets/new-images/discount.png'
import FreeDownload from '../../assets/new-images/free-download.png'
import FreeDownloadWhite from '../../assets/new-images/free-download-white.png'

const SubscriptionCard = ({ header, title, price, description, color, hasDiscount }) => {

    const [click, setClicked] = useState(false);
    const [hover, serHover] = useState(false);


    useState(()=>{

    },[hover])

    const handleClick = () =>{
        setClicked(!click);
    }

    const handleMouseOver = () =>{
        serHover(!hover);
    }

    return (
        <MainContainer color={color} click={click} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}> 
            {hasDiscount === true ? <img src={Discount} id="discount" /> : <></>}
            <div className='card-header'>
                <p className='uppercase font-semibold'>{header}</p>
                <span className='uppercase font-semibold title text-center'>{title}</span>
                <div className='price-container'>
                    <span className='price'>{price}</span>
                </div>
                <div className="circle" />
            </div>
            <br /><br />
            <span className='descritpion text-[#7a7a7a] text-sm'>{description}</span>
            <br />
            <div className='discount-container'>
                {hasDiscount === true ? <span>Avail within <span className='font-semibold'>48 hours</span> and get a <span className='font-semibold'>20% discount!</span></span>: <img src={hover ? FreeDownloadWhite : FreeDownload} height="100" />}
                <br/>
                <AvailButton href="http://192.168.230.35:8023/Registration" target="_blank" color={color} className='avail-button'>Avail now</AvailButton>
            </div>
            
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