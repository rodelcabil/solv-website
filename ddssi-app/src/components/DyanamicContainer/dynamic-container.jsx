import React from 'react'
import { MainContainer } from './dynamic-container-styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DynamicContainer = ({data}) => {
  return (
    
        data.map((item, key) => {
            return <MainContainer color={item.color}  background={item.background} key={key} reverse={true}>
                <div className="test-div"></div>
                <div className='flex justify-center flex-col max-w-[500px] z-10'>
                    <span className='text-[32px] font-semibold text-[#202124] title'>{item.title}</span>
                    <br />
                    <div className="h-[5px] w-[100px] rounded-xl divider" style={{background: item.color}}/>
                    <br />
                    <span className='text-[#202124]'>{item.description} </span>
                </div>
                <div data-aos="fade-up" className='z-10'>
                    <img src={item.img} className='item-img' alt="" /> 
                    {/* <LazyLoadImage src={item.img} className='item-img' /> */}
                </div>
            </MainContainer>
        })
    
  )
}

export default DynamicContainer