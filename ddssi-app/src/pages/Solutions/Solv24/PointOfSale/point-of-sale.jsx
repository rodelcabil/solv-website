import React from 'react'
import Solv24Navbar from '../../../../components/Navbar/Solv24Navbar/solv24-navbar'
import { BodyContainer, MainContainer } from './point-of-sale-styles'
import POSSolution from '../../../../assets/pos-solv-24.png'
import FooterSection from '../../../MainPage/Section/Footer/footer-section'

const PointOfSale = () => {
    return (
        <>
            <Solv24Navbar />
            <MainContainer>
                <BodyContainer>
                    <div className='flex flex-col flex-1'>
                        <p className='text-5xl text-[#343434] font-bold mb-7'>Point Of Sale System</p>
                        <span className='text-[#7a7a7a] text-1xl'>A convenient way to accurately record sales and keep track of how your business is doing. It also integrates with POS devices. POS is an add-on or stand alone point of sale software for a Single Node with unlimited users.</span>
                    </div>
                    <div className='flex flex-1 p-2 justify-center '>
                        <img src={POSSolution} alt="" />
                    </div>
                </BodyContainer>
            </MainContainer>
            <FooterSection/>
        </>
    )
}

export default PointOfSale