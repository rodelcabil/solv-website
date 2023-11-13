import React from 'react'
import Solv24Navbar from '../../../../components/Navbar/Solv24Navbar/solv24-navbar'
import { BodyContainer, MainContainer, GridContainer } from './hr-solutions-styles'
import HRSolution from '../../../../assets/hr-solv-24.png'
import FooterSection from '../../../MainPage/Section/Footer/footer-section'
import FaqCollapsible from '../../../../components/FaqCollapsible/FaqCollapsible'
import { hr_solutions_faqs } from './hr-solutions-faqs'

const HRSolutions = () => {
    return (
        <>
            <Solv24Navbar />
            <MainContainer>
                <BodyContainer>
                    <div className='flex flex-col flex-1'>
                        <p className='text-4xl text-[#343434] font-bold mb-7'>Human Resource Information System Solution</p>
                        <span className='text-[#7a7a7a] text-1xl mb-10'>End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity. Hr Solution includes payroll, Human Resources Information System (HRIS) and system timekeeping with geo tagging.</span>
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
                    <div className='flex flex-1 p-2 justify-center '>
                        <img src={HRSolution} alt="" />
                    </div>
                </BodyContainer>
                <br/><br/>
                <div className='flex flex-col py-10'>
                    <span className='text-2xl font-bold text-[#343434] uppercase'>Human Resource Information System FAQs</span>
                    <br/><br/>
                    <GridContainer>
                        {
                            hr_solutions_faqs.map((item, key) => {
                                return (
                                    <FaqCollapsible key={key} question={item.question} answer={item.answer} />
                                )
                            })
                        }
                    </GridContainer>
                </div> 
            </MainContainer>
            <FooterSection/>
        </>
    )
}

export default HRSolutions