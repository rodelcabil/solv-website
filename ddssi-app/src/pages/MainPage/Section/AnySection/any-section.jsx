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
                <span className='text-4xl text-[#343434] font-normal text-center mb-2'>Anytime, Anywhere, On any device</span>
                <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Our platform ensures a consistent and effortless user experience, providing you the flexibility to stay connected and productive no matter where life takes you.</span>
            </div>
            <br /><br /><br />
            <GridContainer>
                <div className="container">
                    <img src={macbook} />
                    <div className="overlay">
                        <div className="text-white">Using a laptop</div>
                    </div>
                </div>
                <div className="container">
                    <img src={beach} />
                    <div className="overlay">
                        <div className="text-white">While having a vacation</div>
                    </div>
                </div>
                <div className="container">
                    <img src={ipadv3} />
                    <div className="overlay">
                        <div className="text-white">Using a tablet</div>
                    </div>
                </div>
                <div className="container">
                    <img src={pcsolv} />
                    <div className="overlay">
                        <div className="text-white">Using a computer</div>
                    </div>
                </div>
                <div className="container">
                    <img src={party} />
                    <div className="overlay">
                        <div className="text-white">At the party</div>
                    </div>
                </div>
                <div className="container">
                    <img src={ipadv4} />
                    <div className="overlay">
                        <div className="text-white">Using an Ipad</div>
                    </div>
                </div>
                <div className="container">
                    <img src={conference} />
                    <div className="overlay">
                        <div className="text-white">At the conference</div>
                    </div>
                </div>
                <div className="container">
                    <img src={imacsolv} />
                    <div className="overlay">
                        <div className="text-white">Using a mac computer</div>
                    </div>
                </div>
            </GridContainer>
        </MainContainer>

    )
}

export default AnySection