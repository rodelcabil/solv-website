import React from 'react'
import { MainContainer, BodyContainer } from './why-ddssi-section-styles'
import Reason from '../../../../components/ReasonCard/reason-card'

const WhyDDSSISection = () => {
  return (
    <MainContainer>
        <BodyContainer>
            <div className='flex flex-col'>
                <span className='text-3xl text-[#343434] font-semibold'>WHY DDSSI?</span>
                <span className='text-1xl text-[#7A7A7A] font-semibold'>Reasons why our company chose us.</span>
            </div>
        </BodyContainer>
        <br /><br />
        <BodyContainer>
           <Reason title="Reason 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." color="#DEAE1E"/>
           <Reason title="Reason 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." color="#B93D3B"/>
           <Reason title="Reason 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." color="#6C8B23"/>
           <Reason title="Reason 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." color="#1595FF"/>
        </BodyContainer>
    </MainContainer>
  )
}

export default WhyDDSSISection