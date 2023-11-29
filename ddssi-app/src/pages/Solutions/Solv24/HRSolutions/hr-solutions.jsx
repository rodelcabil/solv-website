import React from 'react'
import Solv24Navbar from '../../../../components/Navbar/Solv24Navbar/solv24-navbar'
import { BodyContainer, MainContainer, GridContainer } from './hr-solutions-styles'
import HRSolution from '../../../../assets/hr-solv-24.png'
import FooterSection from '../../../MainPage/Section/Footer/footer-section'
import FaqCollapsible from '../../../../components/FaqCollapsible/FaqCollapsible'
import { hr_solutions_faqs } from './hr-solutions-faqs'
import ContactSection from '../../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../../components/Title/title'
import DescriptionComponent from '../../../../components/Description/description'
import ScrollToTopButton from '../../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../../MainPage/Section/Footer/footer-data-links'

const HRSolutions = () => {
    return (
        <>
            <Solv24Navbar />
            <MainContainer>
                <BodyContainer>
                    <div data-aos="fade-right" className='flex flex-col max-w-[500px]'>
                        <TitleComponent title="Human Resource Information System Solution" /><br/>
                        <DescriptionComponent description="End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity. Hr Solution includes payroll, Human Resources Information System (HRIS) and system timekeeping with geo tagging." />
                        {/* <p className='text-4xl text-[#343434] font-bold mb-7'></p> */}
                        {/* <span className='text-[#7a7a7a] text-1xl mb-10'></span> */}
                        <br/>
                        <div className='flex gap-2'>
                            <div className='flex flex-col bg-[#F2F2F2] p-3 rounded-lg text-white'>
                                <p className='text-sm font-bold mb-2 text-[#DDB038]'>Hr Solution Starter 24</p>
                                <span className='text-xs text-[#7A7A7A] font-semibold'>Up to 50 employees, unlimited users</span>
                            </div>
                            <div className='flex flex-col bg-[#F2F2F2] p-3 rounded-lg text-white'>
                                <p className='text-sm font-bold mb-2 text-[#576FB3]'>Hr Solution Basic 24</p>
                                <span className='text-xs text-[#7A7A7A] font-semibold'>51 to 150 employees, unlimited users</span>
                            </div>
                            <div className='flex flex-col bg-[#F2F2F2] p-3 rounded-lg text-white'>
                                <p className='text-sm font-bold mb-2 text-[#B93D3B]'>Hr Solution Intermediate 24</p>
                                <span className='text-xs text-[#7A7A7A] font-semibold'>151 to 300 employees, unlimited users</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className='img-container relative flex w-[500px] p-2 justify-center '>
                        <img src={HRSolution} className='item-img absolute' alt="" />
                    </div>
                </BodyContainer>
                <br/><br/><br/><br/>
                <iframe className='w-full rounded' width="641" height="600" src="https://www.youtube.com/embed/F-Pa-rxIstg" title="What is Hr Solution?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br/><br/>
                <div className='flex flex-col py-10 max-w-[1500px] m-auto'>
                    <span className='text-2xl font-normal text-[#343434]'>HR Solution Frequently Asked Questions</span>
                    <br/><br/>
                    <GridContainer>
                        {
                            hr_solutions_faqs.map((item, key) => {
                                return (
                                    <div data-aos="fade-up" key={key} data-aos-delay={key+"0"}>
                                        <FaqCollapsible key={key} question={item.question} answer={item.answer} />
                                    </div>
                                )
                            })
                        }
                    </GridContainer>
                </div> 
            </MainContainer>
            <ContactSection/>
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
        </>
    )
}

export default HRSolutions