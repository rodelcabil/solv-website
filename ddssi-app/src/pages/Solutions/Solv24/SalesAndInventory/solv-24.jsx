import React from 'react'
import { BodyContainer, GridContainer, MainContainer } from './solv-24-styles'
import FooterSection from '../../../MainPage/Section/Footer/footer-section'
import SalesAndInventory from '../../../../assets/sales-inventory-solv-24.png'
import Solv24Card from '../../../../components/Solv24Card/solv-24-card'
import Uno from '../../../../assets/uno.png'
import Solo from '../../../../assets/solo.png'
import Duo from '../../../../assets/duo.png'
import Solv24Navbar from '../../../../components/Navbar/Solv24Navbar/solv24-navbar'
import { sales_inventory_faqs } from './sales-and-inventory-faq'
import FaqCollapsible from '../../../../components/FaqCollapsible/FaqCollapsible'
import ContactSection from '../../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../../components/Title/title'
import DescriptionComponent from '../../../../components/Description/description'
import ScrollToTopButton from '../../../../components/ScrollToTopButton/scroll-to-top-button'
import UnoBgImg from '../../../../assets/uno-banner.jpg'
import SoloBgImg from '../../../../assets/solo-banner.jpg'
import DuoBgImg from '../../../../assets/duo-banner.jpg'
import { Solv24Links } from '../../../MainPage/Section/Footer/footer-data-links'

const Solv24 = () => {
    return (
        <>
            <Solv24Navbar />
            <MainContainer>
                <BodyContainer>
                    <div className='max-w-[600px]'>
                        <TitleComponent title="Sales and Inventory System" /><br />
                        <DescriptionComponent description="Sales and inventory system perfect for businesses with one or two stores with option to expand and scale in the future. It is a web-based point-of-sales, inventory, customer management and reporting tool designed for small and medium Business (SMBs) who needs a direct and practical approach in recording and maintaining their business transactions. Developed using the work process perfected in actual business environment, it can be applied to any business handling inventory and sales functions. SOLV is a browser based system that can be accessed using any internet browser. It is a foundation and transactional backbone to any kind of business." />
                    </div>
                    <iframe className='flex-1 rounded'  src="https://www.youtube.com/embed/fBGbzeAMqvg" title="Manage Inventory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </BodyContainer>
                <br /><br /><br /><br />
                <BodyContainer className='gap-[15px]'>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-stretch'>
                        <Solv24Card bgImg={UnoBgImg} img={Uno} title="Uno" description="It includes software for 1 Headquarter with unlimited users, a software for 1 x single node/branch with unlimited users." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className='flex items-stretch'>
                        <Solv24Card bgImg={SoloBgImg} img={Solo} title="Solo" description="It is our single log-in variant of SOLV Sales and Inventory. It includes software for combined headquarter and branch with unlimited users. It features simplified processes with auto approval." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className='flex items-stretch'>
                        <Solv24Card bgImg={DuoBgImg} img={Duo} title="Duo" description="It is the ideal SOLV Sales and Inventory variant for businesses with 2 branches. It includes software for 1 Headquarter with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. " />
                    </div>
                </BodyContainer>
                
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
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
        </>
    )
}

export default Solv24