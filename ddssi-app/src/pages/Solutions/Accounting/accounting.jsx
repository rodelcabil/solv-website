import React from 'react'
import { Banner, DynamicContainer, MainContainer, PlanContainer, BodyContainer } from './accounting-styles'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import ReusableNavbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import AccountingImg from '../../../assets/accounting.png'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import AccountingVideo from '../../../assets/videos/solv-accounting.mp4'

const Accounting = () => {

    const data = [
        {
            "title": "Accounting One",
            "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": AccountingImg,
            "reverse": false,
        },
        {
            "title": "Accounting Connect",
            "description": "Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": AccountingImg,
            "reverse": true,
        },
    ];

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
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <BodyContainer>
                    <VideoComponent videoSrc={AccountingVideo} width="1000" />
                </BodyContainer>
                {
                    data.map((item, key) => {
                        return <DynamicContainer key={key} reverse={item.reverse}>
                                    <div data-aos={item.reverse ? "fade-left" : "fade-right"} className='flex justify-center flex-col max-w-[500px]'>
                                        <TitleComponent title={item.title} /><br />
                                        <DescriptionComponent description={item.description} />
                                    </div>
                                    <div data-aos={item.reverse ? "fade-right" : "fade-left"}>
                                        <img src={item.img} className='item-img' alt="" />
                                    </div>
                                </DynamicContainer>
                    })
                }
                <br/><br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plans</span>
                </div>
                <PlanContainer col={2}>
                    <SubscriptionCard header="Accounting" title="Accounting One" price="₱149,000.00 monthly" color="#D7B146" description="Accounting One is a stand-alone advance accounting system. This is available on a 24-month installment."/>
                    <SubscriptionCard header="Accounting" title="Accounting Connect" price="₱149,000.00 monthly" color="#5469AC" description="Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. This is available on a 24-month installment."/>
                </PlanContainer>
            </MainContainer>
            <ContactSection/>
            <FooterSection links={Solv24Links}/>
        </>
    )
}

export default Accounting