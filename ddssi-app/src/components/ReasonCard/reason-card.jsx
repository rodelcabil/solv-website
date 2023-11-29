import React from 'react'
import { MainContainer } from './reason-styles'

const Reason = ({title, description, color}) => {
    return (
        <MainContainer color={color}>
            <br />
            <span className='reason-title text-xl text-white'>{title}</span>
            <br />
            <span className='reason-description text-white'>{description}</span>
            <br />
        </MainContainer>
    )
}

export default Reason