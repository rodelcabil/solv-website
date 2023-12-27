import React from 'react'
import { BackButton, MainContainer } from './page-not-found-styles'
import PageNotFoundImg from '../../assets/compressed/page-not-found.png'
import BackFunction from '../../functions/go-back'
const PageNotFound = () => {

  const goBack = BackFunction();

  return (
    <MainContainer>
        <img src={PageNotFoundImg} width="500"/>
        <br/>
        <h3 className='text-[#343434] text-2xl font-bold'>PAGE NOT FOUND</h3>
        <br/>
        <BackButton onClick={goBack}>Go Back</BackButton>
    </MainContainer>
  )
}

export default PageNotFound