import React from 'react'
import { MainContainer, BodyContainer, Banner, DynamicContainer, PlanContainer } from './solv24-styles'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import UnoImg from '../../../assets/uno.png'
import SoloImg from '../../../assets/solo.png'
import DuoImg from '../../../assets/duo.png'
import POSImg from '../../../assets/pos-solv-24.png'
import AccountingImg from '../../../assets/accounting.png'
import HRImg from '../../../assets/hr-solv-24.png'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'

const Solv24 = () => {

    const data = [
        {
            "title":"Uno 24",
            "description":"Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users. 24 months installment.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Solo 24",
            "description": "Solo 24 is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval, 24 months installment.",
            "img": SoloImg,
            "reverse": true,
        },
        {
            "title": "Duo 24",
            "description": "Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. 24 months installment.",
            "img": DuoImg,
            "reverse": false,
        },
        {
            "title":"POS 24",
            "description":"A convenient way to accurately record sales and keep track of how your business is doing. It also integrates with POS devices. POS is an add-on or stand alone point of sale software for a Single Node with unlimited users.",
            "img": POSImg,
            "reverse": true,
        },
        {
            "title": "Accounting One 24",
            "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": AccountingImg,
            "reverse": false,
        },
        {
            "title": "Accounting Connect 24",
            "description": "Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": AccountingImg,
            "reverse": true,
        },
        {
            "title": "Hr Solution Starter 24",
            "description":"Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": HRImg,
            "reverse": false,
        },
        {
            "title":"Hr Solution Basic 24",
            "description":"Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": HRImg,
            "reverse": true,
        },
        {
            "title":"Hr Solution Intermediate 24",
            "description":"Hr Solution Intermediate 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": HRImg,
            "reverse": false,
        },

    ];

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
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer  id="read-more">
                {/* <BodyContainer>
                    <div data-aos="fade-right" className='flex justify-center flex-col max-w-[500px]'>
                        <TitleComponent title="SOLV 24" /><br />
                        <DescriptionComponent description="Ready to use set of full featured business solution softaware to address needs of micro, Small and Medium Enterprises (MSMEs) offered at an attractive pricepoint and easy payment terms." />
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className='img-container relative flex w-[500px] p-2 justify-center '>
                        <img src={Solv24Img} className='item-img absolute' alt="" />
                    </div>
                </BodyContainer>
                 */}
                 {
                    data.map((item, key)=>{
                        return  <DynamicContainer key={key} reverse={item.reverse}>
                            <div  className='flex justify-center flex-col max-w-[500px]'>
                                <TitleComponent title={item.title} /><br />
                                <DescriptionComponent description={item.description} />
                            </div>
                            <div >
                                <img src={item.img} className='item-img' alt="" width="300" />
                            </div>
                        </DynamicContainer>
                    })
                 }
                <br/><br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plans</span>
                </div>
                <PlanContainer col={4} >
                    <SubscriptionCard key={1} header="SOLV 24" title="Uno 24" price="₱4,125.00 monthly" color="#1595FF" description="Uno is our entry level variant of SOLV Business Solution. This is available on a 24-month installment." />,
                    <SubscriptionCard key={2} header="SOLV 24" title="Solo 24" price="₱4,125.00 monthly" color="#D7B146" description="Solo 24 is our single log-in variant of SOLV Business Solution. This is available on a 24-month installment."/>,
                    <SubscriptionCard key={3} header="SOLV 24" title="Duo 24" price="₱6,625.00 monthly" color="#5469AC" description="Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. This is available on a 24-month installment."/>,
                    <SubscriptionCard key={4} header="SOLV 24" title="POS 24" price="₱750.00 monthly" color="#AD4742" description="POS 24 is an add-on or stand alone Point of Sale software (1 x Single Node, Unlimited users). This is available on a 24-month installment."/>
                </PlanContainer>
                <br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Accounting Plans</span>
                </div>  
                <PlanContainer col={2}>
                    <SubscriptionCard header="SOLV 24" title="Accounting One 24" price="₱6,208.33 monthly" color="#D7B146" description="Accounting One is a stand-alone advance accounting system. This is available on a 24-month installment."/>
                    <SubscriptionCard header="SOLV 24" title="Accounting Connect 24" price="₱6,208.33 monthly" color="#5469AC" description="Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. This is available on a 24-month installment."/>
                    
                </PlanContainer>
                <br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>HR Solutions Plans</span>
                </div>  
                <PlanContainer col={3}>
                    <SubscriptionCard header="SOLV 24" title="Hr Solution Starter 24" price="₱2,875.00 monthly" color="#AD4742" description="Hr Solution - Starter 24 can accommodate up to 50 employees. 24 month installment."/>
                    <SubscriptionCard header="SOLV 24" title="Hr Solution Basic 24" price="₱4,125.00 monthly" color="#1595FF" description="Hr Solution - Basic 24 can accommodate 51 to 150 employees. 24 months installment."/>
                    <SubscriptionCard header="SOLV 24" title="Hr Solution Intermediate 24" price="₱7,041.67 monthly" color="#738A46" description="Hr Solution - Intermediate 24 can accommodate 151 to 300 employees. 24 months installment."/>
                </PlanContainer>
            </MainContainer>
            <SolutionDiscountContainer />
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <FloatingComponent />
        </>

    )
}

export default Solv24