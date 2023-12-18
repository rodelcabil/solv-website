import React from 'react'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { BodyContainer, MainContainer, PlanContainer, GridContainer, Banner } from './hr-solutions-styles'
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
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'

import GeoTagging from '../../../assets/new-images/geo-tagging.jpg'
import EmployeeManagement from '../../../assets/new-images/employee-management.jpg'
import PerformanceManagement from '../../../assets/new-images/performance-review.jpg'
import PayrollManagement from '../../../assets/new-images/payroll-management.jpg'
import UserPermission from '../../../assets/new-images/user-permission.jpg'
import Tardiness from '../../../assets/new-images/recruitment-tracking.jpg'
import Deductables from '../../../assets/new-images/deductables.jpg'

const HRSolutions = () => {

    const _data = [
        {
            "title": "Hr Solution-Starter",
            "description": "Hr Solution Starter is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system.  Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title": "Hr Solution-Basic",
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
            "title": "Hr Solution-Professional",
            "description": "POS 24 is an add-on or stand alone Point of Sale software (1 x Single Node, Unlimited users).",
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
            "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
            "img": UnoImg,
            "reverse": false,
        },
        {
            "title": "Hr Solution Basic 24",
            "description": "Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": UnoImg,
            "reverse": true,
        },
        {
            "title": "Hr Solution Intermediate 24",
            "description": "Hr Solution Intermediate 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
            "img": UnoImg,
            "reverse": false,
        },

    ];

    const data = [
        {
            "title": "System Timekeeping with Geo Tagging",
            "description": "Accurate time tracking with GPS-based geo-tagging for enhanced attendance verification. Real-time visibility into employee attendance and location data.",
            "img": GeoTagging,
            "reverse": false,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        },
        {
            "title": "Automated Memo for AWOL and Tardiness",
            "description": "Automated generation of memos for employees with instances of Absence Without Leave (AWOL) and tardiness. Streamlined enforcement of attendance policies with consistent communication.",
            "img": Tardiness,
            "reverse": true,
            "background": "rgba(215, 177, 70, 0.1)",
            "color": "#D7B146",
            "animation": "zoom-in-up"
        },
        {
            "title": "Employee Performance Review",
            "description": "Structured performance appraisal processes with customizable evaluation criteria. Goal-setting, feedback, and performance improvement plans for employees.",
            "img": PerformanceManagement,
            "reverse": false,
            "background": "rgba(84, 105, 172, 0.1)",
            "color": "#5469AC",
            "animation": "zoom-in-up"
        },
        {
            "title": "Payroll Management",
            "description": "Automated payroll processing. Tax calculation and compliance.",
            "img": PayrollManagement,
            "reverse": true,
            "background": "rgba(173, 71, 66, 0.1)",
            "color": "#AD4742",
            "animation": "zoom-in-up"
        },
        {
            "title": "User Permissions and Security",
            "description": "Implement rolebased access control to restrict user permissions.",
            "img": UserPermission,
            "reverse": false,
            "background": "rgba(115, 138, 70, 0.1)",
            "color": "#738A46",
            "animation": "zoom-in-up"
        },
        {
            "title": "Recruitment and Applicant Tracking",
            "description": "Post job openings. Receive and manage job applications for streamlined hiring process.",
            "img": EmployeeManagement,
            "reverse": true,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        }
        ,
        {
            "title": "User-Editable Deductions Table",
            "description": "Flexibility for HR administrators to customize and manage deduction tables. Easy updates to adapt to changes in announced by relevant government agencies or company policies.",
            "img": Deductables,
            "reverse": false,
            "background": "rgba(21, 149, 255, 0.1)",
            "color": "#1D8DF9",
            "animation": "zoom-in-up"
        }

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

                <br />
                <BodyContainer>
                    <VideoComponent videoSrc={HRSolutionsVideo} width="1000" />
                </BodyContainer>
                <DynamicContainer data={data} />
                <br /><br /><br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>HR Solutions Plan</span>
                </div>
                <PlanContainer col={5}>
                    <SubscriptionCard header="HR Solutions" title="Starter" price="₱69,000.00" inclusion="Test" color="#1595FF" description="Hr Solution - Starter can accommodate up to 50 employees." />
                    <SubscriptionCard header="HR Solutions" title="Basic" price="₱99,000.00" inclusion="Test" color="#D7B146" description="Hr Solution - Basic can accommodate 51 to 150 employees." />
                    <SubscriptionCard header="HR Solutions" title="Intermediate" price="₱169,000.00" inclusion="Test" color="#5469AC" description="Hr Solution - Intermediate can accomodate 151 to 300 employees." />
                    <SubscriptionCard header="HR Solutions" title="Professional" price="₱269,000.00" inclusion="Test" color="#AD4742" description="Hr Solution - Professional can accommodate 301 to 500 employees." />
                    <SubscriptionCard header="HR Solutions" title="Enterprise" price="₱469,000.00" inclusion="Test" color="#738A46" description="Hr Solution - Intermediate can accomodate 151 to 300 employees." />
                </PlanContainer>
                <br /><br />
                <div className="flex w-full m-auto max-w-[1500px] py-[30px]">
                    <span className='text-2xl text-[#343434]'>Payroll Plan</span>
                </div>
                <PlanContainer col={3}>
                    <SubscriptionCard header="Payroll" title="Lite" price="₱39,000.00" inclusion="Test" color="#1595FF" description="Payroll Lite can accommodate 100 employees." />
                    <SubscriptionCard header="Payroll" title="Pro" price="₱89,000.00" inclusion="Test" color="#D7B146" description=" Payroll Pro can accommodate 400 employees." />
                    <SubscriptionCard header="Payroll" title="Max" price="₱149,000.00" inclusion="Test" color="#5469AC" description="Payroll Max can accommodate 1000 employees." />
                </PlanContainer>
                <br /><br />
                <div className='flex flex-col py-10 max-w-[1500px] m-auto'>
                    <span className='text-2xl font-normal text-[#343434]'>HR Solution Frequently Asked Questions</span>
                    <br /><br />
                    <GridContainer>
                        {
                            hr_solutions_faqs.map((item, key) => {
                                return (
                                    <div data-aos="fade-up" key={key} data-aos-delay={key + "0"}>
                                        <FaqCollapsible key={key} question={item.question} answer={item.answer} />
                                    </div>
                                )
                            })
                        }
                    </GridContainer>
                </div>
            </MainContainer>
            {/* <SolutionDiscountContainer /> */}
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default HRSolutions