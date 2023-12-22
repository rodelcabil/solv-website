import React from 'react'
import { BodyContainer, GridContainer, MainContainer, Banner } from './sales-and-inventory-styles'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { data, sales_inventory_faqs, sales_plan_data } from './sales-and-inventory-data'
import FaqCollapsible from '../../../components/FaqCollapsible/FaqCollapsible'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import SalesInventoryVideo from '../../../assets/videos/sales-and-inventory.mp4'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import PlanContainer from '../../../components/PlanContainer/plan-container'

const SalesAndInventory = () => {
    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] max-w-3xl font-normal text-center'>SOLV Sales and Inventory System</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>
                        Sales and inventory system perfect for businesses with one or two stores with option to expand and scale in the future.
                        {/* Digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts. */}
                    </span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="/solution/sales-and-inventory#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <BodyContainer>
                    {/* <div className='max-w-[500px]'>
                        <TitleComponent title="Sales and Inventory System" isGradient={true} /><br />
                        <div className='h-[5px] w-[100px] bg-[#1595FF] rounded-xl' /><br />
                        <DescriptionComponent description="It is a web-based point-of-sales, inventory, customer management and reporting tool designed for small and medium Business (SMBs) who needs a direct and practical approach in recording and maintaining their business transactions. Developed using the work process perfected in actual business environment, it can be applied to any business handling inventory and sales functions." />
                    </div> */}

                    <VideoComponent videoSrc={SalesInventoryVideo} width="1000" />
                </BodyContainer>
                <br />
                <DynamicContainer data={data} />
                <br /><br /><br /><br /><br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plan</span>
                </div>
                <PlanContainer data={sales_plan_data[0].sales} />
                <div className='flex flex-col py-10 mt-16 max-w-[1500px] m-auto'>
                    <p className='text-2xl font-normal text-[#343434] uppercase'>Sales and Inventory System Frequently Asked Questions</p>
                    <br /><br />
                    <GridContainer>
                        {
                            sales_inventory_faqs.map((item, key) => {
                                return (
                                    <div data-aos="fade-up" key={key} data-aos-delay={key + "00"} className='flex'>
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

export default SalesAndInventory