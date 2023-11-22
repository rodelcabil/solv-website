import React from 'react'
import { MainContainer } from './management-card-styles'

const ManagementCard = ({img, name, position}) => {
  return (
    <MainContainer>
        <img src={img} height="300"/>
        <br/>
        <p className='text-[#343434] font-bold'>{name}</p>
        <span className='text-[#7A7A7A] text-center'>{position}</span>
    </MainContainer>
  )
}

export default ManagementCard