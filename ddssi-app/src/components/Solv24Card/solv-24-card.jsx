import React from 'react'
import { MainContainer } from './solv-24-card-styles'
import { IoIosArrowForward } from "react-icons/io";

const Solv24Card = ({bgImg, img, title, description}) => {
  return (
    <MainContainer>
        <div className='flex relative'>
          <img src={bgImg} className='bg-img'/>
          <img src={img} className='item-img absolute'  />
        </div>
        <br/><br/><br/>
        <div className='flex flex-col p-6'>
            <span className='font-bold text-[#343434] text-lg mb-2'>{title}</span>
            <p className='text-[#7a7a7a]'>{description}</p>
            <span className='flex gap-2 text-sm items-center font-normal text-[#1595FF] mt-3 cursor-pointer '>Learn more <IoIosArrowForward /></span>
        </div>
        
    </MainContainer>
  )
}

export default Solv24Card