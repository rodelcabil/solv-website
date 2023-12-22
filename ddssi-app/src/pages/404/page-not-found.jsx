import React from 'react'
import { MainContainer } from './page-not-found-styles'
import PageNotFoundImg from '../../assets/compressed/page-not-found.png'
const PageNotFound = () => {
  return (
    <MainContainer>
        <img src={PageNotFoundImg} width="500"/>
        <br/>
        <h3 className='text-[#343434] text-2xl font-bold'>PAGE NOT FOUND</h3>
    </MainContainer>
  )
}

export default PageNotFound