import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoGift } from "react-icons/go";    
import DropDown from "./DropDown";

function Header() {
  return (
    <div className="sticky top-0 z-[999] bg-white shadow-custom">
      <nav className="bg-gradient-to-l from-[#03bbd3] to-[#6fe5f4] pt-[10px] pb-[6px]">
        <div className="s:max-w-[1200px] mx-auto flex justify-between px-4">
          <div className="flex items-center gap-x-[6px] delivery-types">
              <div className="bg-[#dafbff] h-[45px] max-w-[125px] rounded-md grid place-items-center cursor-pointer px-4 s:px-10 s:h-[52px] s:max-w-[160px]">
                  <img className="" src='/assets/img/a101-logo-2_256x256.jpg' alt="" />
              </div>
              <div className="bg-[#fff] h-[45px] max-w-[125px] rounded-md grid place-items-center cursor-pointer px-4 s:px-10 s:h-[52px] s:max-w-[160px] relative">
                  <img className="" src='/assets/img/extra-logo_512x512.jpg' alt="" />
              <div className="selected-border-mask w-[calc(100%+30px)] h-[13px] -left-[15px] -bottom-1.5 absolute bg-white"></div>
              </div>
              <div className="bg-[#dafbff] h-[45px] max-w-[125px] rounded-md grid place-items-center cursor-pointer px-4 s:px-10 s:h-[52px] s:max-w-[160px]">
                  <img className="w-full" src='/assets/img/kapida-logo_512x512.jpg' alt="" />
              </div>
          </div>
          <div className="hidden m:flex gap-2 pr-4">
            <button
             className="bg-brand-gray-background flex items-center justify-between gap-2 rounded-full cursor-pointer s:border s:border-white/50 s:h-12 m:px-4 xl:px-6 p-2 text-brand-blue-primary font-medium text-[15px]">
            <GoGift className="text-[18px]" /> Kampanyalar
            </button>
            <button
             className="bg-brand-gray-background flex items-center justify-between gap-2 rounded-full cursor-pointer s:border s:border-white/50 s:h-12 m:px-4 xl:px-6 p-2 text-brand-blue-primary font-medium text-[15px]">
            <GoGift className="text-[18px]" /> Giriş Yap
            </button>
          </div>
        </div>
      </nav>
      <div className="s:max-w-[1200px] mx-auto my-[10px] w-full flex items-center">
        <div className="relative w-full px-4">
          <input type="text" placeholder="Aramak istediğin ürünü yaz..." className="w-full border border-[#e5e7e9] rounded-full py-2 s:py-3 pr-1 pl-4 text-center text-[15px]" />
          <HiMagnifyingGlass className="absolute top-2 s:top-3 left-7 text-[24px] text-[#333]"/>
        </div>
      </div>  
      <DropDown />
    </div>
  )
}

export default Header
