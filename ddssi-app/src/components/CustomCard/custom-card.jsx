import React from 'react'
import { MainContainer } from './custom-card-styles'


const CustomCard = ({description, img}) => {
    return (
        <MainContainer>
           
            <img src={img} className="flex-1 drop-shadow-md"/>
            <br />
            <span className='text-[#343434] font-semibold'>{description}</span>
            <br />
        </MainContainer>
    )
}

export default CustomCard