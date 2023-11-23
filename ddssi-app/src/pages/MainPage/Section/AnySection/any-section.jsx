import React from 'react'
import { GridContainer, MainContainer } from './any-section-styles'
import beach from '../../../../assets/new/beach.png'
import macbook from '../../../../assets/new/macbook.png'
import party from '../../../../assets/new/party.png'
import ipadv3 from '../../../../assets/new/ipad-v3.jpg'
import pcsolv from '../../../../assets/new/pc-solv.png'
import ipadv4 from '../../../../assets/new/ipad-v4.png'
import imacsolv from '../../../../assets/new/imac-solv.png'
import conference from '../../../../assets/new/conference.png'

const AnySection = () => {
    return (
        <MainContainer>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-4xl text-[#343434] font-normal text-center mb-2'>Anytime, Anywhere, Any device</span>
                <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <br /><br /><br />
            <GridContainer>
                <img src={macbook} />
                <img src={beach} />
                <img src={ipadv3} />
                <img src={pcsolv} />
                <img src={party} />
                <img src={ipadv4} />
                <img src={conference} />
                <img src={imacsolv} />
            </GridContainer>
        </MainContainer>

    )
}

export default AnySection