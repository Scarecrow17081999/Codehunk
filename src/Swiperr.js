import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

function Whyso() {
  const [width1,widthState]= React.useState(0)
  window.onresize = function() {
 widthState(window.innerWidth) ;
};
  return (
    <div className='carouselMain'>
    
<h1>Company We Worked With</h1>

      <Swiper className='SwiperSel'
        spaceBetween={35}
        slidesPerView={width1<810&&width1>600?2:width1<600&&width1>0?1:3}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

      >
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            alt='sjdjfm'
          />
        </SwiperSlide>
      </Swiper>
      <div className='carouselChild'>
        <h2>Why Choose Us?</h2>
        <h4>we aspire to deliver engaging and elegantly-crafted web and mobile applications to individuals, independent agencies, and businesses a like.</h4>
        <p>We help in building and growing your brand further with creative, data-driven, tech-focused strategies that enable you to meet your business goals.</p>
      </div>
    </div>
  );
}
export default Whyso;
