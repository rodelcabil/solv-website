import React from 'react'
import { MainContainer, Title } from './service-card-styles'
import {BsArrowRight} from "react-icons/bs"

const ServiceCard = ({title, description, icon, color}) => {
    return (
       <MainContainer>
            <img src={icon} className='img-banner'/>
            <div className='details-div mt-[100px]'>
                <Title className='service-title text-lg font-bold text-[#343434]'  color={color}>{title}</Title>
                <br/><br/>
                <span className='service-description text-[#7a7a7a]'>{description}</span>
            </div>
            {/* <button className='service-button w-fit flex items-center gap-2 px-3 py-2 rounded text-white' style={{background: color}}>Learn More <BsArrowRight /></button> */}
       </MainContainer>
    )
}

export default ServiceCard