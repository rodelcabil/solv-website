import React from 'react'
import { MainContainer, Title } from './service-card-styles'
import {BsArrowRight} from "react-icons/bs"

const ServiceCard = ({title, description, icon, color}) => {
    return (
       <MainContainer>
            <div className='rounded-md' >
                <img src={icon} height="80" width="80"/>
            </div>
            <br/>
            <Title className='title text-lg font-bold text-[#343434]'  color={color}>{title}</Title>
            <br/>
            <span className='text-[#7a7a7a]'>{description}</span>
            <br/>
            <button className='w-fit flex items-center gap-2 px-3 py-2 rounded text-white' style={{background: color}}>Learn More <BsArrowRight /></button>
       </MainContainer>
    )
}

export default ServiceCard