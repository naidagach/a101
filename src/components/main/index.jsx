import Swiper1 from "./BrandSwiper"
import ProductSwiper from "./ProductSwiper"

function Main() {
  return (
    <div>
      <Swiper1 />
      <div className="s:max-w-[90%] mx-auto p-4">
      <div className="s:hidden w-full flex justify-around gap-4">
        <div className="w-[25%]">
          <img src="/assets/img/aldin-aldin.webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/1(1).webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/haftanin-yildizlari.webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/10TL-ve-uzeri.webp" alt="" />
        </div>
      </div>
      <div className="hidden w-full s:flex justify-around gap-4">
        <div className="w-[25%]">
          <img src="/assets/img/aaa.webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/web.webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/hy.webp" alt="" />
        </div>
        <div className="w-[25%]">
          <img src="/assets/img/10tl.webp" alt="" />
        </div>

      </div>
      </div>
      < ProductSwiper />
    </div>
  )
}

export default Main
