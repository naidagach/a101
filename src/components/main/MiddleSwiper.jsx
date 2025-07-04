import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function MiddleSwiper() {
  return (
    <>
    <div className='max-w-[1200px] mx-auto px-4'>
      <div>
        <h3 className='font-medium text-base'>Hadi Alışveriş Kredisi</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='rounded-2xl overflow-hidden bg-brand-blue-primary'>
            <img src="https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/67a30dfaa619270008f09afa/9.jpg?width=300" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
export default MiddleSwiper
