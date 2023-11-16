import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-card-styles'
import { NavLink } from 'react-router-dom'


const BusinessSolutionCard = ({title, icon, description, link}) => {
  return (
    <MainContainer>
      <BodyContainer>
        <div className='flex h-fit justify-center'>
            <img src={icon} width="80" height="80" />
        </div>
        <div className='flex flex-col'>
            <span className='text-[#343434] font-semibold mb-1'>{title}</span>
            <span className='desciption text-sm text-[#7a7a7a]'>{description} <NavLink exact to={link} className='font-semibold text-[#343434] mt-6 cursor-pointer hover:text-[#1595FF]'>Read more.</NavLink></span>
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default BusinessSolutionCard