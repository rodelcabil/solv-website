import React from 'react'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Banner, BodyContainer, MainContainer } from './custom-styles'
import Custom1 from '../../../assets/custom-1.png'
import Custom2 from '../../../assets/custom-2.png'
import Custom3 from '../../../assets/custom-3.png'
import Custom4 from '../../../assets/custom-4.png'
import CustomCard from '../../../components/CustomCard/custom-card'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import RequirementAnalysis from '../../../assets/new-images/requirement-analysis.jpg'
import RapidPrototyping from '../../../assets/new-images/rapid-prototyping.jpg'
import AgileDevelopmentMethodologies from '../../../assets/new-images/agile.jpg'
import CostEffectiveSolutions from '../../../assets/new-images/cost-effective.jpg'
import CollaborativeApproach from '../../../assets/new-images/collaborative-approach.jpg'
import FeatureEnhancement from '../../../assets/new-images/feature-enhancement.jpg'


const Custom = () => {

    const data = [
        {
            "title": "Requirements Analysis",
            "description": " Conduct indepth analysis of client requirements. Identify specific features, workflows, and functionalities needed.",
            "img": RequirementAnalysis,
            "reverse": false,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        },
        {
            "title": "Rapid Prototyping",
            "description": "Develop prototypes to visualize customization early in the process. Ensure alignment with client expectations before full implementation.",
            "img": RapidPrototyping,
            "reverse": true,
            "background": "rgba(215, 177, 70, 0.1)",
            "color": "#D7B146",
            "animation": "zoom-in-up"
        },
        {
            "title": "Feature Enhancement",
            "description": "Add, modify, or remove features based on client needs. Align software capabilities with specific business goals.",
            "img": FeatureEnhancement,
            "reverse": false,
            "background": "rgba(84, 105, 172, 0.1)",
            "color": "#5469AC",
            "animation": "zoom-in-up"
        },
        {
            "title": "Agile Development Methodologies",
            "description": "Adopt agile methodologies for flexible and iterative development. Accommodate changes and updates throughout the customization process.",
            "img": AgileDevelopmentMethodologies,
            "reverse": true,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        },
        {
            "title": "Cost-Effective Solutions",
            "description": "Offer tiered pricing models based on customization needs. Provide transparent cost structures for tailored",
            "img": CostEffectiveSolutions,
            "reverse": false,
            "background": "rgba(173, 71, 66, 0.1)",
            "color": "#AD4742",
            "animation": "zoom-in-up"
        },
        {
            "title": "Collaborative Approach",
            "description": "Work closely with clients in a collaborative development model. Ensure client involvement in decision-making hroughout the customization process.",
            "img": CollaborativeApproach,
            "reverse": true,
            "background": "rgba(115, 138, 70, 0.1)",
            "color": "#738A46",
            "animation": "zoom-in-up"
        }

    ];

    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] font-normal text-center'>SOLV Custom</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>Our SOLV business solution software are already packed with features and functionality. We
                        also do software customization to add unique processes for those who want it.</span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <DynamicContainer data={data} />
                <br/><br/>
                <BodyContainer>
                    <span className='text-2xl text-[#343434]'>SOLV Custom Plan</span>
                </BodyContainer>
                <br/><br/>
                <BodyContainer>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <SubscriptionCard header="SOLV Custom" title="Custom 1" price="₱49,990.00" inclusion="Test" color="#1595FF" description="Customization package up to maximum 15 man-days with 1 year validity." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <SubscriptionCard header="SOLV Custom" title="Custom 2" price="₱99,990.00" inclusion="Test" color="#D7B146" description="Customization package up to maximum 30 man-days with 1 year validity."/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <SubscriptionCard header="SOLV Custom" title="Custom 3" price="₱199,990.00" inclusion="Test" color="#5469AC" description="Customization package up to maximum 60 man-days with 1 year validity."/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <SubscriptionCard header="SOLV Custom" title="Custom 4" price="₱299,990.00" inclusion="Test" color="#AD4742" description="Customization package up to maximum 90 man-days with 1 year validity."/>
                    </div>
                </BodyContainer>
                <br />
                {/* <div className='flex justify-center flex-1 max-w-[1500px] m-auto'>
                    <span className='w-full text-2xl text-[#343434] max-w-2xl font-light text-center'>We have four discounted packages that have varying number of man-days for software customization.</span>
                </div> */}
            </MainContainer>
            {/* <SolutionDiscountContainer /> */}
            <ContactSection />
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default Custom