import React from 'react'
import { MainContainer } from './management-card-styles'

const ManagementCard = ({img, name, position}) => {
  return (
    <MainContainer>
        <img src={img}/>
        <div className='details-container absolute bottom-0 left-0 p-3'>
          <p className='text-[#fff] font-semibold'>{name}</p>
          <span className='text-[#e3e3e3] text-center'>{position}</span>
        </div>
    </MainContainer>
  )
}

export default ManagementCard