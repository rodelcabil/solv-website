import React from 'react'
import { BodyContainer, GridContainer, MainContainer, Banner, PlanContainer, DynamicContainer } from './sales-and-inventory-styles'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import Solv24Card from '../../../components/Solv24Card/solv-24-card'
import Uno from '../../../assets/uno.png'
import Solo from '../../../assets/solo.png'
import Duo from '../../../assets/duo.png'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { sales_inventory_faqs } from './sales-and-inventory-faq'
import FaqCollapsible from '../../../components/FaqCollapsible/FaqCollapsible'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import UnoBgImg from '../../../assets/uno-banner.jpg'
import SoloBgImg from '../../../assets/solo-banner.jpg'
import DuoBgImg from '../../../assets/duo-banner.jpg'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import VideoComponent from '../../../components/VideoComponent/video-component'
import SalesInventoryVideo from '../../../assets/videos/sales-and-inventory.mp4'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import UnoImg from '../../../assets/uno.png'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'

const SalesAndInventory = () => {

    const data = [
        {
            "title":"Multi",
            "description":"Multi is the ideal SOLV Business Solution variant for businesses with 3 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 3 x single nodes/branches with unlimited users. Digitize and automate your business process, ensure accurate recording of transactions and have instant access to critical data to help you make strategic business decision.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Multi+",
            "description": "Multi+ is the ideal SOLV Business Solution variant for businesses with 3 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 3 x single nodes/branches with unlimited users and add-on 1st year maintenance agreement on package included nodes. ",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Duo",
            "description": "Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. ",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title":"Duo+",
            "description":"Duo+ is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users and add-on 1st year maintenance agreement on package included nodes. ",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Uno",
            "description": "Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users.  ",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title": "Solo",
            "description": "Solo is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval.",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "POS",
            "description":"POS is an add-on or stand alone Point of Sale software (1 x Single Node, Unlimited users). ",
            "img": UnoImg,
            "reverse": false,
        },
        

    ];

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
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer>
                <br /><br /><br />
                <BodyContainer>
                    <div className='max-w-[500px]'>
                        <TitleComponent title="Sales and Inventory System" /><br />
                        <DescriptionComponent description="It is a web-based point-of-sales, inventory, customer management and reporting tool designed for small and medium Business (SMBs) who needs a direct and practical approach in recording and maintaining their business transactions. Developed using the work process perfected in actual business environment, it can be applied to any business handling inventory and sales functions." />
                    </div>
                    <VideoComponent videoSrc={SalesInventoryVideo} width="500" />
                </BodyContainer>
                {/* <BodyContainer className='gap-[15px]'>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-stretch'>
                        <Solv24Card bgImg={UnoBgImg} img={Uno} title="Uno" description="It includes software for 1 Headquarter with unlimited users, a software for 1 x single node/branch with unlimited users." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className='flex items-stretch'>
                        <Solv24Card bgImg={SoloBgImg} img={Solo} title="Solo" description="It is our single log-in variant of SOLV Sales and Inventory. It includes software for combined headquarter and branch with unlimited users. It features simplified processes with auto approval." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className='flex items-stretch'>
                        <Solv24Card bgImg={DuoBgImg} img={Duo} title="Duo" description="It is the ideal SOLV Sales and Inventory variant for businesses with 2 branches. It includes software for 1 Headquarter with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. " />
                    </div>
                </BodyContainer> */}
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
                 } */}
                <br /><br /><br /><br /><br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plan</span>
                </div>
                <PlanContainer col={4}>
                    <SubscriptionCard header="Sales and Inventory" title="Uno" price="₱99,000.00" inclusion="Test" color="#1595FF" description="Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users." />
                    <SubscriptionCard header="Sales and Inventory" title="Solo" price="₱99,000.00" inclusion="Test" color="#738A46" description="Solo is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval." />
                    <SubscriptionCard header="Sales and Inventory" title="Duo" price="₱159,000.00" inclusion="Test" color="#D7B146 " description="Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. " />
                    <SubscriptionCard header="Sales and Inventory" title="Duo+" price="₱225,000.00" inclusion="Test" color="#D7B146" description="Duo+ is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users and add-on 1st year maintenance agreement on package included nodes. " />
                    <SubscriptionCard header="Sales and Inventory" title="Multi" price="₱319,000.00" inclusion="Test" color="#AD4742" description="Multi is the ideal SOLV Business Solution variant for businesses with 3 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 3 x single nodes/branches with unlimited users " />
                    <SubscriptionCard header="Sales and Inventory" title="Multi+" price="₱219,000.00" inclusion="Test" color="#AD4742" description="Multi+ is the ideal SOLV Business Solution variant for businesses with 3 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 3 x single nodes/branches with unlimited users and add-on 1st year maintenance agreement on package included nodes. " />
                    <SubscriptionCard header="Sales and Inventory" title="POS" price="₱18,000.00" inclusion="Test" color="#5469AC" description="Solo is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval." />
                </PlanContainer>
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
            <SolutionDiscountContainer />
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default SalesAndInventory