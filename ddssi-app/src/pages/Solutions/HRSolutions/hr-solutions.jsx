import React from 'react'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { DynamicContainer, BodyContainer, MainContainer,PlanContainer, GridContainer, Banner } from './hr-solutions-styles'
import HRSolution from '../../../assets/hr-solv-24.png'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import FaqCollapsible from '../../../components/FaqCollapsible/FaqCollapsible'
import { hr_solutions_faqs } from './hr-solutions-faqs'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import HRSolutionsVideo from '../../../assets/videos/hr-solutions.mp4'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import UnoImg from '../../../assets/uno.png'

const HRSolutions = () => {

    const data = [
        {
            "title":"Hr Solution-Starter",
            "description":"Hr Solution Starter is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system.  Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",      
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Hr Solution-Basic",
            "description": "Hr Solution Basic is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system.  Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging. It includes performance review, calendar, notification, auto memo, employee access and more.",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Hr Solution-Intermediate",
            "description": "Hr Solution is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system.  Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging. It includes performance review, calendar, notification, auto memo, employee access and more.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Hr Solution-Professional",
            "description":"POS 24 is an add-on or stand alone Point of Sale software (1 x Single Node, Unlimited users).",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Accounting One 24",
            "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title": "Accounting Connect 24",
            "description": "Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Hr Solution Starter 24",
            "description":"Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Hr Solution Basic 24",
            "description":"Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title":"Hr Solution Intermediate 24",
            "description":"Hr Solution Intermediate 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": UnoImg,
            "reverse": false,
        },

    ];

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
                        {/* Digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts. */}
                    </span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                {/* <BodyContainer>
                    <div data-aos="fade-right" className='flex flex-col max-w-[500px]'>
                        <TitleComponent title="Human Resource Information System Solution" /><br/>
                        <DescriptionComponent description="End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity. Hr Solution includes payroll, Human Resources Information System (HRIS) and system timekeeping with geo tagging." />
                        
                        <br/>
                       
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className='img-container relative flex w-[500px] p-2 justify-center '>
                        <img src={HRSolution} className='item-img absolute' alt="" />
                    </div>
                </BodyContainer> */}
                {/* <div className='w-full flex justify-center'>
                    <VideoComponent videoSrc={HRSolutionsVideo} />
                </div> */}
                {/* {
                    data.map((item, key)=>{
                        return  <DynamicContainer key={key} reverse={item.reverse}>
                                    <div data-aos={item.reverse ? "fade-left" : "fade-right"} className='flex justify-center flex-col max-w-[500px]'>
                                        <TitleComponent title={item.title} /><br />
                                        <DescriptionComponent description={item.description} />
                                    </div>
                                    <div data-aos={item.reverse ? "fade-right" : "fade-left"}>
                                        <img src={item.img} className='item-img' alt="" />
                                    </div>
                                </DynamicContainer>
                    })
                 }*/}
                
                 <BodyContainer>
                    <VideoComponent videoSrc={HRSolutionsVideo} width="1000" />
                </BodyContainer>
                <br/><br/><br/><br/> 
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>HR Solutions Plan</span>
                </div>
                 <PlanContainer col={5}>
                    <SubscriptionCard header="HR Solutions" title="Starter" price="₱69,000.00" inclusion="Test" color="#1595FF" description="Hr Solution - Starter can accommodate up to 50 employees." />
                    <SubscriptionCard header="HR Solutions" title="Basic" price="₱99,000.00" inclusion="Test" color="#D7B146" description="Hr Solution - Basic can accommodate 51 to 150 employees."/>
                    <SubscriptionCard header="HR Solutions" title="Intermediate" price="₱169,000.00" inclusion="Test" color="#5469AC" description="Hr Solution - Intermediate can accomodate 151 to 300 employees."/>
                    <SubscriptionCard header="HR Solutions" title="Professional" price="₱269,000.00" inclusion="Test" color="#AD4742" description="Hr Solution - Professional can accommodate 301 to 500 employees."/>
                    <SubscriptionCard header="HR Solutions" title="Enterprise" price="₱469,000.00" inclusion="Test" color="#738A46" description="Hr Solution - Intermediate can accomodate 151 to 300 employees."/>
                 </PlanContainer>
                 <br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Payroll Plan</span>
                </div>
                 <PlanContainer col={3}>
                    <SubscriptionCard header="Payroll" title="Lite" price="₱39,000.00" inclusion="Test" color="#1595FF" description="Payroll Lite can accommodate 100 employees." />
                    <SubscriptionCard header="Payroll" title="Pro" price="₱89,000.00" inclusion="Test" color="#D7B146" description=" Payroll Pro can accommodate 400 employees."/>
                    <SubscriptionCard header="Payroll" title="Max" price="₱149,000.00" inclusion="Test" color="#5469AC" description="Payroll Max can accommodate 1000 employees."/>                    
                 </PlanContainer>
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