import React from 'react'
import { Banner, BodyContainer, MainContainer, PlanContainer } from './add-ons-styles'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import SupportPack from '../../../assets/support-pack.png'
import Asset from '../../../assets/assets.png'
import Zenith from '../../../assets/zenith.png'
import Slider from "react-slick";
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import ABBanner from '../../../assets/accounting-books-banner.png'
import SupportBanner from '../../../assets/support-banner.jpg'
import ZenithBanner from '../../../assets/zenith-banner.jpg'
import AssetBanner from '../../../assets/assets-banner.jpg'

import Scalability from '../../../assets/new-images/scalability.jpg'
import AdditionalFunctionality from '../../../assets/new-images/additional-functionality.jpg'
import SystemSupport from '../../../assets/new-images/system-support.jpg'

import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'

const AddonsPage = () => {


  const _data = [
    {
      "title": "Support Pack",
      "description": "Annual support pack to ensure continuous access to support from our team of software engineers. Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed.",
      "reverse": false,
      "img": SupportPack,
      "banner": SupportBanner
    },
    {
      "title": "Assets",
      "description": "Ensure that company assets are properly recorded and keep track of their depreciated value. Assets is an add-on software that will add fixed asset management with depreciation to your SOLV system.",
      "reverse": true,
      "img": Asset,
      "banner": AssetBanner
    },
    {
      "title": "Zenith",
      "description": "Add nodes/branches to your sales and inventory system easily when you need it. Zenith adds 1 x single node or branch with unlimited users.",
      "reverse": false,
      "img": Zenith,
      "banner": ZenithBanner
    },
    {
      "title": "HR Solution Support Pack",
      "description": "Hr Solution/Payroll Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed.",
      "reverse": true,
      "img": Zenith,
      "banner": ZenithBanner
    }
  ];

  const data = [
    {
        "title": "Scalability Features",
        "description": "Add-ons to increase the number of branches or nodes as needed.",
        "img": Scalability,
        "reverse": false,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Additional Functionality",
        "description": "Enhances the core functionality of the software. Adds new features or tools to meet specific user needs.",
        "img": AdditionalFunctionality,
        "reverse": true,
        "background": "rgba(215, 177, 70, 0.1)",
        "color": "#D7B146",
        "animation": "zoom-in-up"
    },
    {
        "title": "Extend System Support",
        "description": "Allows users to add support pack / maintenance agreement for continued access to SOLV support beyond support included in the purchase of the software.",
        "img": SystemSupport,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    }
];

  return (
    <>
      <Solv24Navbar />
      <Banner>
        <div data-aos="fade-up">
          <p className='addon-header text-5xl text-[#fff] font-normal text-center'>SOLV Add-ons</p><br />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
          <span className='addon-description text-1xl text-[#fff]  font-light text-center'>Building blocks that add features to your SOLV system. It allows you to expand and scale
            at your own pace instead of being forced to get a system with features you do not need.</span>
          <br />
        </div>
        <br />
        <div data-aos="fade-up" data-aos-delay="200">
          <ScrollDownButton href="#read-more" />
        </div>
      </Banner>
      {/*<MainContainer id="read-more">
        <br /><br />
        <Swiper cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]} 
          className="mySwiper">
          <SwiperSlide>
            
            <br/><br/><br/><br/>
          </SwiperSlide>
          <SwiperSlide>
           
            <br/><br/><br/><br/>
          </SwiperSlide>
          <SwiperSlide>
            
            <br/><br/><br/><br/>
          </SwiperSlide>
        </Swiper>
      </MainContainer> */}
      <MainContainer id="read-more">
        <DynamicContainer data={data} /> 
        <div className="flex w-full m-auto max-w-[1500px] py-[30px] ">
          <span className='text-2xl text-[#343434]'>Add-ons Plan</span>
        </div>
        <PlanContainer col={4}>
          <SubscriptionCard header="Add-ons" title="Support Pack" price="₱69,000.00" color="#1595FF" description="Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed." />
          <SubscriptionCard header="Add-ons" title="Assets" price="₱25,000.00" color="#D7B146" description="Assets is an add-on software that will add fixed asset management with depreciation to your SOLV system." />
          <SubscriptionCard header="Add-ons" title="Zenith" price="₱40,000.00" color="#5469AC" description="Zenith adds 1 x single node or branch with unlimited users." />
          <SubscriptionCard header="Add-ons" title="HR Solutions Support Pack" price="₱30,000.00" color="#AD4742" description="HR Solutions Support Pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed." />
        </PlanContainer>
      </MainContainer>
      {/* <SolutionDiscountContainer /> */}
      <ContactSection />
      <FooterSection links={Solv24Links} />
      <ScrollToTopButton />
      <FloatingComponent />
    </>

  )
}

export default AddonsPage
