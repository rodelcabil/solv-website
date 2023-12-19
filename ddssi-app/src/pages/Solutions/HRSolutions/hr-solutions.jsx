import React from 'react'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { BodyContainer, MainContainer, GridContainer, Banner } from './hr-solutions-styles'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import FaqCollapsible from '../../../components/FaqCollapsible/FaqCollapsible'
import { data, hr_plan_data, hr_solutions_faqs } from './hr-solutions-data'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import HRSolutionsVideo from '../../../assets/videos/hr-solutions.mp4'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import PlanContainer from '../../../components/PlanContainer/plan-container'

const HRSolutions = () => {
    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] max-w-3xl font-normal text-center'>Human Resource Information System Solution</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>
                        End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity. Hr Solution includes payroll, Human Resources Information System (HRIS) and system timekeeping with geo tagging.
                        
                    </span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="/solution/hr-solutions#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <br />
                <BodyContainer>
                    <VideoComponent videoSrc={HRSolutionsVideo} width="1000" />
                </BodyContainer>
                <DynamicContainer data={data} />
                <br /><br /><br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>HR Solutions Plan</span>
                </div>
                <PlanContainer data={hr_plan_data[0].hr} />
                <br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Payroll Plan</span>
                </div>
                <PlanContainer data={hr_plan_data[0].payroll} />
                <br /><br />
                <div className='flex flex-col py-10 max-w-[1500px] m-auto'>
                    <span className='text-2xl font-normal text-[#343434]'>HR Solution Frequently Asked Questions</span>
                    <br /><br />
                    <GridContainer>
                        {
                            hr_solutions_faqs.map((item, key) => {
                                return (
                                    <div data-aos="fade-up" key={key} data-aos-delay={key + "0"}>
                                        <FaqCollapsible key={key} question={item.question} answer={item.answer} />
                                    </div>
                                )
                            })
                        }
                    </GridContainer>
                </div>
            </MainContainer>
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default HRSolutions