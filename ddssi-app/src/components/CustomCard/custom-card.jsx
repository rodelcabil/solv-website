import React from 'react'
import { MainContainer } from './custom-card-styles'


const CustomCard = ({description, img, price}) => {
    return (
        <MainContainer>
            <img src={img} className="flex-1 drop-shadow-md"/>
            <br />
            <span className='text-[#7a7a7a] font-normal'>{description}</span>
            <br />
            <span className='text-[#343434] font-semibold'>{price}</span>
        </MainContainer>
    )
}

export default CustomCard