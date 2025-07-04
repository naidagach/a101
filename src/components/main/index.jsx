import { useEffect, useState } from "react"
import AdSwiper from "./AdSwiper"
import BrandSwiper from "./BrandSwiper"
import ProductSwiper from "./ProductSwiper"
import { getProdByCatId } from "../../services/api"
import MiddleSwiper from "./MiddleSwiper"

const mainTopSliders = [
  {
      title: 'Kadın İç Giyim',
      data: 'kadın_ic_giyim',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6863939710b3e900084e3e43/reco.jpg?width=164',
      linkTo: '/',
      id: 20
  },
  {
      title: 'Çanta & Valiz',
      data: 'canta_valiz',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6862d952cd483b0008f12e87/reco6.jpg?width=164',
      linkTo: '/',
      id: 21
  },
  {
      title: 'Banyo Mobilya & Aksesuar',
      data: 'banyo_mobilya_aksesuar',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6862d952cd483b0008f12e85/reco4.jpg?width=164',
      linkTo: '/',
      id: 13
  },
  {
      title: 'Sağlık & Kişisel Bakım',
      data: 'sağlık_kişisel_bakım',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6863939710b3e900084e3e43/reco.jpg?width=164',
      linkTo: '/',
      id: 8
  },
  {
      title: 'Çocuk Ayakkabı & Terlik',
      data: 'cocuk',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6863939710b3e900084e3e43/reco.jpg?width=164',
      linkTo: '/',
      id: 25
  },
  {
      title: 'Bilgisayar & Tablet',
      data: 'bilgisayar_tablet',
      imgUrl: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6863939710b3e900084e3e43/reco.jpg?width=164',
      linkTo: '/',
      id: 5
  },
]

function Main() {
  const [data, setData] = useState({})
  useEffect(() => {
    mainTopSliders.forEach(elem => {
      getProdByCatId(elem.id)
        .then(info => {
          setData(prev => ({...prev, [elem.data]:info.products}))
        })
    })
  })
  const path = '/assets/img/'
  const mobImg = ['aldin-aldin.webp', '1(1).webp', 'haftanin-yildizlari.webp', '10TL-ve-uzeri.webp' ]
  const deskImg = ['aaa.webp', 'web.webp', 'hy.webp', '10tl.webp' ]
  return (
    <div className="bg-[#f4f6fa]">
      <BrandSwiper />
      <AdSwiper />
      <div className="s:max-w-[1200px] mx-auto p-4">
        <div>
          <p className="text-sm text-center text-brand-blue-primary pb-4">500 TL ve üzeri alışverişlerinizde ücretsiz kargo!</p>
        </div>
        <div className="s:hidden w-full flex justify-around gap-4">
          {mobImg.map((img, i) => (
            <div className="w-[25%]">
              <img key={i} src={path + img} alt="" />
            </div>))}
        </div>
        <div className="hidden w-full s:flex justify-around gap-4">
          {deskImg.map(img => (
          <div className="w-[25%]">
            <img src={path + img} alt="" />
          </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto p-4">
        <img className="rounded-2xl " src="https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6863b5429670450008f79c88/web(340).jpg?width=1200" alt="" />
      </div>
      {Object.keys(data).length > 0 && 
        <div className="max-w-[1200px] mx-auto p-4">
          {mainTopSliders.slice(0, 3).map((item, i) => (
            <ProductSwiper key={item.id} {...item} data={data?.[item.data]} />
          ))}
          <div className="max-w-[1200px] mx-auto py-4">
            <img className="rounded-2xl" src="https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/getw/files/6864c1638a290800083e1f1c/yatay_banner1.jpg?width=1200" alt="" />
          </div>

          {mainTopSliders.slice(3, 4).map((item, i) => (
            <ProductSwiper key={item.id} {...item} data={data?.[item.data]} />
          ))}
          <MiddleSwiper />
          {mainTopSliders.slice(4).map((item, i) => (
            <ProductSwiper key={item.id} {...item} data={data?.[item.data]} />
          ))}
        </div>
      }
    </div>
  )
}

export default Main
