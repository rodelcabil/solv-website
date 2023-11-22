import React from 'react'
import { MainContainer, BodyContainer } from './testimonial-section-styles'
import TestimonialCard from '../../../../components/TestimonialCard/testimonial-card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import AccentHub from '../../../../assets/accenthub.jpg'
import Thinkerbox from '../../../../assets/thinkerbox.jpg'
import HopeWell from '../../../../assets/hopewell.jpg'
import BeWell from '../../../../assets/bewell.jpg'
import MaxVision from '../../../../assets/maxvision.jpg'
import Catpc from '../../../../assets/catpc.jpg'

const TestimonialSection = () => {
  return (
    <MainContainer id="testimonial">
      <div className='flex flex-col items-center justify-center'>
        <span className='text-4xl text-[#343434] font-normal text-center mb-2'>CLIENT’S TESTIMONIALS</span>
        <span className='text-1xl text-[#7A7A7A] font-normal text-center'>What our other clients share.</span>
      </div>
      <br /><br />
      <BodyContainer>
        <Swiper
          slidesPerView={3}
           navigation={true}
           pagination={true}
           keyboard={true}
           loop={true}
           centeredSlides={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1366 : {
              slidesPerView: 3,
            },
          }}
           modules={[Autoplay, Navigation, Pagination, Keyboard]} 
           className="mySwiper flex">
          <SwiperSlide  className='flex items-stretch h-auto'>
            <div className='flex items-stretch justify-center'>
              <TestimonialCard name="Accenthub" comment="We were able to streamline our operation with the help of Digital Doors. Using SOLV Retail, allowed us to be more agile, efficient and productive." companyImg={AccentHub} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-stretch h-auto'>
            <div  className='flex justify-center'>
              <TestimonialCard name="Bewell Nutraceuticals Corp." comment="It’s our first time to avail of a payroll software and we’re happy we have decided to work with Digital Doors Software Solution. Sir Harry and his team are very responsive when it comes to our inquiries as we learn to use the SOLV Software. The team was able to assist our requests for special functions and are easy to talk to. Hoping to further deepen our working relationship in the future." companyImg={BeWell} />
            </div>
            
          </SwiperSlide>
          <SwiperSlide className='flex items-stretch h-auto'>
            <div   className='flex justify-center'>
              <TestimonialCard name="Thinkerbox Enterprises" comment="Digital Doors efficiently helped us in automating our inventory, payables and receivables. They provide excellent and reliable service with good customer service." companyImg={Thinkerbox}/>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-stretch h-auto'>
            <div   className='flex justify-center'>
              <TestimonialCard name="Maxvision Technology Enterprises Inc." comment="I’m happy with the purchase of this software. It is easy to use and reduced payroll processing time by half." companyImg={MaxVision}/>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-stretch h-auto'>
            <div   className='flex justify-center'>
              <TestimonialCard name="Hopewell Sales Corp." comment="I want to express my gratitude to Digital Doors for their outstanding service. From the initial consultation to the final delivery, they demonstrated a high level of competence and commitment to excellence. Digital Doors is a reliable partner for all your digital needs." companyImg={HopeWell} />
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-stretch h-auto'>
            <div className='flex justify-center'>
              <TestimonialCard name="Cycle Advent Trading" comment="Digital Doors Solutions, Inc. is a team of well informed people. They are very good at what they do. Plus a very nice service done! So keep it up and more success at your business." companyImg={Catpc} />
            </div>
           
          </SwiperSlide>
        </Swiper>
      </BodyContainer>
    </MainContainer>
  )
}

export default TestimonialSection