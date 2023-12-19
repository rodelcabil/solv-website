import React from 'react'
import { Banner, MainContainer, BodyContainer } from './accounting-styles'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import ReusableNavbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import AccountingVideo from '../../../assets/videos/solv-accounting.mp4'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import PlanContainer from '../../../components/PlanContainer/plan-container'
import { accounting_plan_data, data } from './accounting-data'

const Accounting = () => {


    return (
        <>
            <ReusableNavbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] font-normal text-center'>SOLV Accounting</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>
                        Simplified accounting system perfect for small and medium businesses. Manage your finances easily and have accurate reports at a press of a button.
                        {/* Digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts. */}
                    </span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="/solution/accounting#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
            <br />
                <BodyContainer>
                    <VideoComponent videoSrc={AccountingVideo} width="1000" />
                </BodyContainer>
                <DynamicContainer data={data} />
                <br/><br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plans</span>
                </div>
                <PlanContainer data={accounting_plan_data[0].accounting} />
            </MainContainer>
            {/* <SolutionDiscountContainer /> */}
            <ContactSection/>
            <FooterSection links={Solv24Links}/>
            <FloatingComponent/>
            <ScrollToTopButton />
        </>
    )
}

export default Accounting