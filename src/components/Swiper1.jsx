import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Swiper1() {
  // const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides



  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        <SwiperSlide  >
          hfxvbhdgf
        </SwiperSlide>
        <SwiperSlide  >
          hfxvbhdgf
        </SwiperSlide>
        <SwiperSlide  >
          hfxvbhdgf
        </SwiperSlide>
      </Swiper>
    </>
  );
}
