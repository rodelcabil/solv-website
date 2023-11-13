import React from 'react'
import { Divider, MainContainer } from './testimonial-card-styles'
import qoute from '../../assets/qoute.png'
import employee from '../../assets/employee.jpg'
const TestimonialCard = ({name, comment}) => {
  return (
    <MainContainer>
        <img src={qoute} alt="qoute" height="50" width="50"/>
        <br/>
        <span className="text-[#7a7a7a]">{comment}</span>
        <br/>
        <Divider/>
        <br/>
        <img src={employee} alt="qoute" className='employee-img'/>
        <br/>
        <span className="text-[#343434] font-bold">{name}</span>
    </MainContainer>
  )
}

export default TestimonialCard