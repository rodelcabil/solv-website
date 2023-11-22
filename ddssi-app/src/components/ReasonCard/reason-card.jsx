import React from 'react'
import { MainContainer } from './reason-styles'

const Reason = ({title, description, color}) => {
    return (
        <MainContainer color={color}>
            {/* <div className='rounded-md' >
                <span className='text-2xl'>{count}</span>
            </div> */}
            <br />
            <span className='reason-title text-lg font-bold text-white'>{title}</span>
            <br />
            <span className='reason-description text-white'>{description}</span>
            <br />
        </MainContainer>
    )
}

export default Reason