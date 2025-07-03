import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function MySwiper() {
  const [data, setData] = useState([])
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  useEffect(() => {
    fetch('https://a101backend.vercel.app/categories')
      .then(res => res.json())
      .then(info => setData(info))
  })
  

  return (
    <div className="p-[20px]">
      <div className='s:max-w-[90%] mx-auto relative'>
      <button
        ref={prevRef}
        className="top-0 translate-0 w-[50px] h-[88px] flex items-center last-of-type:bg-gradient-to-l last-of-type:from-brand-gray-background last-of-type:justify-end first-of-type:bg-gradient-to-r first-of-type:from-brand-gray-background first-of-type:justify-start absolute z-[2] left-0"
        role="button">
        <div className="cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 19L8 12L16 5"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <button
        ref={nextRef}
        className="top-0 translate-0 w-[50px] h-[88px] flex items-center last-of-type:bg-gradient-to-l last-of-type:from-brand-gray-background last-of-type:justify-end first-of-type:bg-gradient-to-r first-of-type:from-brand-gray-background first-of-type:justify-start absolute  z-[999] right-0 m:right-10"
        role="button">
        <div className="cursor-pointer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 5L16 12L8 19"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <Swiper
      className='w-full'
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={2.1}
        breakpoints={{
          '300' : {
              slidesPerView: 3,
              spaceBetween: 10
          },
          '500' : {
              slidesPerView: 5,
              spaceBetween: 10
          },
          '768' : {
              slidesPerView: 7,
              spaceBetween: 10
          },
          '1028' : {
              slidesPerView: 9,
              spaceBetween: 10
          }
        }} 
        navigation ={true} 
        onSwiper={setSwiperInstance}>
          {data.map(item => {
            return (
        <SwiperSlide>
            <div
                className="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index={13}
                style={{ width: "90.6667px", marginRight: 20 }}>
                <a
                title={item.name}
                className="flex items-center justify-start flex-col gap-2 mobile:w-full w-[88px] cursor-pointer"
                href="/elektronik">
                <div className="mobile:w-[70px] mobile:h-[70px] mobile:p-[2px] mobile:border mobile:rounded-2xl tablet:w-[85px] tablet:h-[85px] tablet:p-0 tablet:border-none desktop:w-[88px] desktop:h-[88px]">
                    <div className="select-none relative w-full h-full">
                      <div className="transition-opacity duration-300  ">
                          <img
                          draggable="false"
                          className="scale-x-100"
                          src={item.img[0]}
                          width={85}
                          height={85}
                          style={{
                              width: "100%",
                              borderRadius: 16,
                              objectPosition: "center center",
                              objectFit: "cover"
                          }}/>
                      </div>
                    </div>
                </div>
                <div className="text-center text-xs h-[30px] overflow-hidden white-space line-clamp-2 font-medium">
                    {" "}
                    {item.name}
                </div>
                </a>
            </div>
        </SwiperSlide>
            )
          })}
      </Swiper>
      </div>
    </div>
  );
}

export default MySwiper;
