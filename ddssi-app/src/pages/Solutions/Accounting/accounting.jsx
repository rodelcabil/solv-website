import React from 'react'
import { Banner, MainContainer, PlanContainer, BodyContainer } from './accounting-styles'
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
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import Staging from '../../../assets/new-images/stagin.jpg'
import FinancialStatement from '../../../assets/new-images/financial-statement.jpg'
import UserPermission from '../../../assets/new-images/user-permission-security.jpg'
import SimplifiedDataEntry from '../../../assets/new-images/simplified-data-entry.jpg'
import Chart from '../../../assets/new-images/chart.jpg'
import Posting from '../../../assets/new-images/posting.jpg'

const Accounting = () => {

    const _data = [
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

    const data = [
        {
            "title": "Staging Prior to Posting",
            "description": "Staging area for data validation and review of supervisor before final posting. Improved control over data accuracy and compliance.",
            "img": Staging,
            "reverse": false,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        },
        {
            "title": "Financial Statement in a second",
            "description": "Instant generation of financial statements for quick decision-making. Real-time insights into the financial health of the organization.",
            "img": FinancialStatement,
            "reverse": true,
            "background": "rgba(215, 177, 70, 0.1)",
            "color": "#D7B146",
            "animation": "zoom-in-up"
        },
        {
            "title": "User Permissions and Security",
            "description": "Implement role-based access control to restrict user permissions.",
            "img": UserPermission,
            "reverse": false,
            "background": "rgba(84, 105, 172, 0.1)",
            "color": "#5469AC",
            "animation": "zoom-in-up"
        },
        {
            "title": "Simplified data entry",
            "description": "Easy one-time record entry and categorization of transactions for accurate financial reporting.",
            "img": SimplifiedDataEntry,
            "reverse": true,
            "background": "rgba(173, 71, 66, 0.1)",
            "color": "#AD4742",
            "animation": "zoom-in-up"
        },
        {
            "title": "Customizable Chart of Accounts",
            "description": "Easily tailor the chart of accounts to fit specific business structures and reporting requirements. Adapt to changes in business processes or industry standards effortlessly.",
            "img": Chart,
            "reverse": false,
            "background": "rgba(84, 105, 172, 0.1)",
            "color": "#5469AC",
            "animation": "zoom-in-up"
        },
        {
            "title": "Integrated Automatic Posting",
            "description": "Automated posting of transactions and journal entries from retail operations. Integration ensures accuracy and timeliness in financial data recording. (Accounting Connect)",
            "img": Posting,
            "reverse": true,
            "background": "rgba(255, 165, 0, 0.2)",
            "color": "rgb(255, 165, 0)",
            "animation": "zoom-in-up"
        }
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
            <br />
                <BodyContainer>
                    <VideoComponent videoSrc={AccountingVideo} width="1000" />
                </BodyContainer>
                <DynamicContainer data={data} />
                <br/><br/><br/>
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Sales and Inventory Plans</span>
                </div>
                <PlanContainer col={2}>
                    <SubscriptionCard header="Accounting" title="Accounting One" price="₱149,000.00" color="#D7B146" description="Accounting One is a stand-alone advance accounting system. This is available on a 24-month installment."/>
                    <SubscriptionCard header="Accounting" title="Accounting Connect" price="₱149,000.00" color="#5469AC" description="Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. This is available on a 24-month installment."/>
                </PlanContainer>
            </MainContainer>
            {/* <SolutionDiscountContainer /> */}
            <ContactSection/>
            <FooterSection links={Solv24Links}/>
            <FloatingComponent/>
        </>
    )
}

export default Accounting