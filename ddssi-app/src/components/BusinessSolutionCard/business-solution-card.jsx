import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-card-styles'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const BusinessSolutionCard = ({title, icon, description, link}) => {
  return (
    <MainContainer>
      <BodyContainer>
        <div className='flex h-fit justify-center'>
            <img src={icon} width="80" height="80" />
        </div>
        <div className='flex flex-col'>
            <span className='text-[#343434] font-semibold mb-1'>{title}</span>
            <span className='desciption text-sm text-[#7a7a7a]'>{description} </span>
            <NavLink exact to={link} className='flex gap-2 text-sm items-center font-semibold text-[#343434] mt-3 cursor-pointer hover:text-[#1595FF]'>Read more <IoIosArrowForward /></NavLink>
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default BusinessSolutionCard