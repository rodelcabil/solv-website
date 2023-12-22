import React from 'react'
import { Divider, MainContainer } from './testimonial-card-styles'
import qoute from '../../assets/compressed/qoute.png'
const TestimonialCard = ({companyName, comment, name, companyImg, height}) => {
  return (
    <MainContainer height={height}>
        <img src={qoute} alt="qoute" height="50" width="50"/>
        <br/>
        <span className="text-[#7a7a7a] text-center ">{comment}</span>
        <p className="text-[#343434] text-center mt-1 font-semibold">- {name}</p>
        <br/>
        <Divider/>
        <br/>
        <img src={companyImg} alt="employee-img" className='employee-img'/>
        <br/>
        <span className="text-[#343434] font-bold text-center max-w-[200px]">{companyName}</span>
    </MainContainer>
  )
}

export default TestimonialCard