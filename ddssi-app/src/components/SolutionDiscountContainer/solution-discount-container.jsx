import React from 'react'
import { AvailButton, BodyContainer, MainContainer } from './solution-discount-container-styles'
import AvailImg from '../../assets/avail-img.png'

const SolutionDiscountContainer = () => {
    return (
        <MainContainer>
            <BodyContainer>
                <div className="flex flex-col items-center w-full">
                    <marquee>
                        <img src={AvailImg} />
                    </marquee>
                    <br /><br />
                    
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default SolutionDiscountContainer