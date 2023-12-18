import React from 'react'
import { MainContainer } from './dynamic-container-styles'

const DynamicContainer = ({data}) => {
  return (
    
        data.map((item, key) => {
            return <MainContainer  background={item.background} key={key} reverse={item.reverse}>
                <div className=' flex justify-center flex-col max-w-[500px]'>
                    <span className='text-[32px] font-semibold text-[#202124]'>{item.title}</span>
                    <br />
                    <div className="h-[5px] w-[100px] rounded-xl" style={{background: item.color}}/>
                    <br />
                    <span>{item.description} </span>
                </div>
                <div data-aos={item.animation}>
                    <img src={item.img} className='item-img' alt="" />
                </div>
            </MainContainer>
        })
    
  )
}

export default DynamicContainer