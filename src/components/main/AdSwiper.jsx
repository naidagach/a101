import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

function AdSwiper() {
  const path = 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/'
  const imgLinks = ['Kampanyalar', 'Aldın Aldın', 'Öne Çıkanlar', 'Markalar']
  const images = ['6866774609246300086f0bd8/web.jpg', '68658c5d59c85d000820fd37/web.png', '6863dbc760e03f000896869d/web.jpg',
                  '68658bc3610bde000899d860/web.jpg', '68658c07610bde000899d864/web.jpg', '685b8f6a95ec570008172147/web.jpg',
                  '685c3ea404812f0008286bee/web.jpg', '6862b484d9792b00088988eb/web.jpg', '6862f493d6623100085d9751/web.jpg',
                  '6863917e5258680008123368/web.jpg', '686519f2a04db90008270c7e/anabanner-2408x736.jpg', '676419ebdd4e630008dc151d/web.jpg',
                  '68658188610bde000899d857/02.web.jpg', '68658188610bde000899d858/02.web-1.jpg', '68658188610bde000899d859/02.web-2.jpg',
                  '68658188610bde000899d85a/02.web-3.jpg', '68658188610bde000899d85b/02.web-4.jpg', '68658188610bde000899d85c/02.web-5.jpg',
                  '68658188610bde000899d85d/02.web-6.jpg', '68343ccb884039000879e393/web.jpg', '680b8e3a89681a000803db02/web.jpg', 
                  '67dd18966abfd40008b7c120/web.jpg', '664dc658bb682b0008f360b3/web.jpg', '6821e3378f239100082b24f4/WEB2.png',
                  '6821e3ef8f239100082b24f8/WEB4.png', '67bd97bb03a9f3000886bf7e/web5.jpg', '67bd97bb03a9f3000886bf7b/web2.jpg',
                  '6821e38b126b810008564dc2/WEB3.png', '67b83afd3f77450008845e7d/web2.jpg', '67bf215a685e5200086595fa/web(310).jpg', 
                  '6821e293126b810008564dbe/WEB1.png', '682196a192e9520008209840/web.png', '67b83afd0c809b0008e94a11/web1.jpg', 
                  '6821e2a6b840eb0008f8dd03/WEB6.png', '6821e4448f239100082b24fc/WEB5.png', '67bd66e9bb78480008df351e/web1.jpg' ]
  const [active, setActive] = useState(0)
  
  return (
    <>
    <div className='p-[20px]'>
      <div className="s:max-w-[1200px] mx-auto">
        <div className='flex flex-wrap 2xs:flex-nowrap'>
          {imgLinks.map((link, i) => (
            <div key={i}
             className={`flex items-center py-2 px-4 rounded-t-lg active
              ${active === i ? 'bg-[#00bad3] text-white' : 'text-black ' }`}
              onClick={() => (setActive(i))}>
              <a className="cursor-pointer text-center text-[15px] ">
                {link}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Swiper
       pagination={{clickable: true}} 
       autoplay={{ delay: 5000, disableOnInteraction: false }}
       modules={[Pagination, Autoplay]} 
       className="mySwiper s:max-w-[1200px] mx-auto w-full h-[200px] xs:h-[350px] m:h-[400px]">
        {images.map((img, i) => (
          <div  className=''>
            <SwiperSlide key={i} className=''><img className='rounded-b-xl rounded-tr-xl size-full' src={path + img} alt="" /></SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
    </>
  );
}
export default AdSwiper
/* 

*/