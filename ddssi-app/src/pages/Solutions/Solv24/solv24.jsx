import React from 'react'
import { SMainContainer, Banner } from './solv24-styles'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import PlanContainer from '../../../components/PlanContainer/plan-container'
import { data, solv24_plan_data } from './solv24-data'

const Solv24 = () => {

    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] font-normal text-center'>SOLV 24</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>
                        Ready to use set of full featured business solution softaware to address needs of micro, Small and Medium Enterprises (MSMEs) offered at an attractive pricepoint and easy payment terms.
                    </span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="/solution/solv-24#read-more"  />
                </div>
            </Banner>
            <SMainContainer id="read-more">
                <DynamicContainer data={data} />
                <br /><br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plans</span>
                </div>
                <PlanContainer data={solv24_plan_data[0].sales} />
                <br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Accounting Plans</span>
                </div>
                <PlanContainer data={solv24_plan_data[0].accounting} />
                <br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>HR Solutions Plans</span>
                </div>
                <PlanContainer data={solv24_plan_data[0].hr} />
            </SMainContainer>
            {/* <SolutionDiscountContainer /> */}
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <FloatingComponent />
        </>

    )
}

export default Solv24