import React from 'react'
import { Banner, BodyContainer, MainContainer } from './add-ons-styles'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import AccountingBook from '../../../assets/accounting-books.png'
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
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'

const AddonsPage = () => {
 
  return (
    <>
      <Solv24Navbar/>
      <Banner>
        <div data-aos="fade-up">
          <p className='addon-header text-5xl text-[#fff] font-normal text-center'>SOLV Add-ons</p><br />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
          <span className='addon-description text-1xl text-[#fff]  font-light text-center'>Building blocks that add features to your SOLV system. It allows you to expand and scale
            at your own pace instead of being forced to get a system with features you do not need.</span>
          <br/>
        </div>
        <br/>
        <div data-aos="fade-up" data-aos-delay="200">
          <ScrollDownButton href="#read-more" />
        </div>
      </Banner>
      <MainContainer id="read-more">
        <br/><br/>
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
          {/* <SwiperSlide>
            <BodyContainer imgbg={ABBanner}>
              <div className='flex justify-center'>
                <div className='flex flex-col max-w-[500px]'>
                  <TitleComponent title="Accounting Books" /><br />
                  <DescriptionComponent description="Manage your finances easily  and have accurate reports at a press of a button. Connects seamlessly with Sales and inventory. It will digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts. Accounting Books will simplify generation of reports and financial statement." />
                </div>
              </div>
              <div className='img-container flex justify-center w-[450px] relative'>
                <img src={AccountingBook}  className='item-img absolute' />
              </div>
            </BodyContainer>
            <br/><br/><br/><br/>
          </SwiperSlide> */}
          <SwiperSlide>
            <BodyContainer imgbg={SupportBanner}>
              <div className='flex justify-center'>
                <div className='flex flex-col max-w-[500px]'>
                  <TitleComponent title="Support Pack" /><br />
                  <DescriptionComponent description="Annual support pack to ensure continuous access to support from our team of software engineers. Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed." />
                </div>
              </div>
              <div className='img-container flex justify-center w-[450px] relative'>
                <img src={SupportPack}  className='item-img absolute' />
              </div>
            </BodyContainer>
            <br/><br/><br/><br/>
          </SwiperSlide>
          <SwiperSlide>
            <BodyContainer imgbg={AssetBanner}>
              <div className='flex justify-center'>
                <div className='flex flex-col max-w-[500px]'>
                  <TitleComponent title="Assets" /><br />
                  <DescriptionComponent description="Ensure that company assets are properly recorded and keep track of their depreciated value. Assets is an add-on software that will add fixed asset management with depreciation to your SOLV system." />
                </div>
              </div>
              <div className='img-container flex justify-center w-[450px] relative'>
                <img src={Asset}  className='item-img absolute' />
              </div>
            </BodyContainer>
            <br/><br/><br/><br/>
          </SwiperSlide>
          <SwiperSlide>
            <BodyContainer imgbg={ZenithBanner}>
              <div className='flex justify-center'>
                <div className='flex flex-col max-w-[500px]'>
                  <TitleComponent title="Zenith" /><br />
                  <DescriptionComponent description="Add nodes/branches to your sales and inventory system easily when you need it. Zenith adds 1 x single node or branch with unlimited users." />
                </div>
              </div>
              <div className='img-container flex justify-center w-[450px] relative'>
                <img src={Zenith}  className='item-img absolute' />
              </div>
            </BodyContainer>
            <br/><br/><br/><br/>
          </SwiperSlide>
        </Swiper>
      </MainContainer>
      <ContactSection />
      <FooterSection links={Solv24Links}/>
      <ScrollToTopButton/>
    </>

  )
}

export default AddonsPage
