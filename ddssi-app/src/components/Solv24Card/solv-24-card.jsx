import React from 'react'
import { MainContainer } from './solv-24-card-styles'

const Solv24Card = ({img, title, description}) => {
  return (
    <MainContainer>
      <br/>
        <img src={img}/>
        <br/>
        <div className='flex flex-col p-6'>
            <span className='font-bold text-[#343434] text-lg mb-2'>{title}</span>
            <span className='text-[#7a7a7a]'>{description}</span>
        </div>
    </MainContainer>
  )
}

export default Solv24Card