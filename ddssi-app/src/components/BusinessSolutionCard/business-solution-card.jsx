import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-card-styles'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const BusinessSolutionCard = ({ title, icon, description, link, hasReadMore }) => {
  if(link == ""){
    return (
        <MainContainer>
          <BodyContainer>
            <div className='flex h-fit justify-center'>
              <img src={icon} width="80" height="80" />
            </div>
            <div className='flex flex-col p-[15px]'>
              <span className='text-[#343434] font-semibold mb-[15px]'>{title}</span>
              <span className='desciption text-[#7a7a7a]'>{description} </span>
              {hasReadMore ? <span className='flex gap-2 text-sm items-center font-semibold text-[#1595FF] mt-3 cursor-pointer '>Learn more <IoIosArrowForward /></span> : ""}
            </div>
          </BodyContainer>
        </MainContainer>
    )
  }
  else{
    return (
      <NavLink exact to={link} className="flex w-full">
        <MainContainer>
          <BodyContainer>
            <div className='flex h-fit justify-center'>
              <img src={icon} width="80" height="80" />
            </div>
            <div className='flex flex-col p-[15px]'>
              <span className='text-[#343434] font-semibold mb-[15px]'>{title}</span>
              <span className='desciption text-[#7a7a7a]'>{description} </span>
              {hasReadMore ? <span className='flex gap-2 text-sm items-center font-semibold text-[#1595FF] mt-3 cursor-pointer '>Learn more <IoIosArrowForward /></span> : ""}
            </div>
          </BodyContainer>
        </MainContainer>
      </NavLink>
  
    )
  }
  
  
}

export default BusinessSolutionCard