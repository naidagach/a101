import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

function ProductSwiper() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://a101backend.vercel.app/products')
      .then(res => res.json())
      .then(info => setData(info.products))
  })
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={10}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper py-[20px] max-w-[90%] mx-auto"
      >
        {data.map(item => {
          return (
        <SwiperSlide>
        <div
          className="swiper-slide m:!w-[165px] !w-[154px] swiper-slide-next"
          // style={{ marginRight: 10 }}  
        >
          <div style={{ containerType: "inline-size" }}>
            <div className="flex product-container bg-white flex-col relative p-2 w-full border border-[#e5e7eb] rounded-2xl">
              <button
                className="absolute product-favourite flex self-end z-[6]"
                id="FavoriteBtn_26057153003"
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.46963 1.80078C4.20662 1.80078 3.04345 2.30266 2.19595 3.21429C1.35875 4.11493 0.899902 5.34285 0.899902 6.66966C0.899902 8.04065 1.4164 9.29102 2.51008 10.5999C3.48437 11.7657 4.88215 12.9471 6.48975 14.3058L6.48975 14.3058L6.49468 14.3099L6.49749 14.3124C7.04733 14.777 7.67004 15.3034 8.31586 15.8635C8.50528 16.028 8.74818 16.1184 8.9999 16.1184C9.25152 16.1184 9.49455 16.028 9.68386 15.8637C10.3311 15.3023 10.9548 14.7751 11.5056 14.3097L11.5118 14.3044C13.1186 12.9463 14.5158 11.7654 15.4898 10.5998C16.5835 9.29101 17.0999 8.04064 17.0999 6.66966C17.0999 5.34286 16.6412 4.11494 15.804 3.21429C14.9565 2.30266 13.7932 1.80078 12.5303 1.80078C11.5843 1.80078 10.7172 2.09786 9.95552 2.68209C9.60498 2.95093 9.28526 3.27419 8.99992 3.64691C8.71464 3.27418 8.39482 2.95092 8.04441 2.68209C7.28274 2.09786 6.4156 1.80078 5.46963 1.80078ZM2.03704 6.66966C2.03704 5.62228 2.39203 4.66831 3.0314 3.98048C3.66088 3.30345 4.526 2.93032 5.46963 2.93032C6.15817 2.93032 6.78983 3.14696 7.34932 3.57601C7.84963 3.95976 8.19989 4.44664 8.40604 4.78939C8.53215 4.99892 8.75471 5.12414 8.9999 5.12414C9.24509 5.12414 9.46765 4.99892 9.59376 4.78939C9.80005 4.44662 10.1503 3.95976 10.6505 3.576C11.21 3.14696 11.8416 2.93032 12.5303 2.93032C13.4738 2.93032 14.3391 3.30345 14.9684 3.98048C15.6078 4.66831 15.9628 5.62228 15.9628 6.66966C15.9628 7.76847 15.5528 8.756 14.6148 9.87853C13.705 10.9673 12.3495 12.1132 10.7686 13.4496C10.2341 13.9011 9.63043 14.4114 8.99869 14.9563C8.37055 14.4125 7.76785 13.903 7.2345 13.4522L7.23366 13.4515L7.23117 13.4495C5.6503 12.1133 4.29485 10.9673 3.38511 9.87853C2.44705 8.756 2.03704 7.76846 2.03704 6.66966Z"
                    fill="#333333"
                  />
                </svg>
              </button>
              <a
                rel="bookmark"
                href="/giyim-aksesuar/tommy-hilfiger-11tl02x038-black-erkek-kemer-siyah_p-26057153"
              >
                <div className="flex flex-col relative pt-[6px] w-full mb-1">
                  <div className="product-badge relative aspect-[252/48.18] m-auto flex justify-center mb-1" />
                  <div className="relative">
                    <div>
                      <div className="absolute mobile:top-0 laptop:top-0 left-0 z-[1]" />
                    </div>
                    <div className="flex w-full cursor-pointer aspect-square h-auto opacity-100">
                      <div className="select-none relative w-full h-full">
                        <div className="transition-opacity duration-300  w-full h-full overflow-hidden">
                          <img
                            draggable="false"
                            className="scale-x-100 h-full"
                            src={item.imageUrl}
                            width={136}
                            height={136}
                            loading="lazy"
                            style={{ width: "100%", objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <noscript />
                    </div>
                    <div className="absolute left-0 bottom-0 flex-col" />
                    {/* <span
                      className="absolute text-center left-0 bottom-0 leading-[12px] p-1 rounded-[6px] max-w-[60%] text-[10px] font-semibold"
                      style={{
                        color: "rgb(255, 255, 255)",
                        backgroundColor: "rgb(234, 36, 42)",
                        border: "1px solid rgb(234, 36, 42)"
                      }}
                    >
                      {discount != '' ? 'Sepette' item.discount 'TL İndirim' : ''}
                    </span> */}
                    <div className="absolute right-0 flex bottom-0 flex-col" />
                  </div>
                  <header>
                    <hgroup className="mt-2 h-[30px] ">
                      <h3
                        title="Tommy Hilfiger 11TL02X038-BLACK Erkek Kemer Siyah"
                        className="text-xs font-medium leading-4 tablet:mb-3 mobile:mb-1 cursor-pointer s:line-clamp-2 mobile:line-clamp-2"
                      >
                        {item.name}
                      </h3>
                    </hgroup>
                  </header>
                </div>
                <section className="mt-2  flex flex-col justify-end mb-2 h-[68px] ">
                  <span
                    className="text-xs text-[#333] h-[17px] line-through cursor-pointer"
                    style={{ lineHeight: "initial" }}
                  />
                  <span className="text-base text-[#333]  not-italic font-medium leading-normal cursor-pointer">
                    {item.price .toLocaleString(2)}
                  </span>
                </section>
              </a>
              <div className="left-3 right-3 product-add-button ">
                <button
                  id="AddToCartBtn_26057153003"
                  className="bg-brand-blue-primary  rounded-full text-base  p-1 text-sm text-center w-full text-white undefined"
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
export default ProductSwiper