import React from 'react'
import { Divider, MainContainer } from './testimonial-card-styles'
import qoute from '../../assets/qoute.png'
const TestimonialCard = ({name, comment, companyImg}) => {
  return (
    <MainContainer>
        <img src={qoute} alt="qoute" height="50" width="50"/>
        <br/>
        <span className="text-[#7a7a7a] text-center text-sm">{comment}</span>
        <br/>
        <Divider/>
        <br/>
        <img src={companyImg} alt="employee-img" className='employee-img'/>
        <br/>
        <span className="text-[#343434] font-bold text-center max-w-[200px]">{name}</span>
    </MainContainer>
  )
}

export default TestimonialCard