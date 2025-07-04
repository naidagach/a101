function DropDown() {
  const menu = ['Elektronik', 'Ev & Yaşam', 'Giyim & Aksesuar', 'Oto & Bahçe &  Yapı',
               'Anne & Bebek & Oyuncak', 'Kozmetik & Kişisel Bakım', 'Kitap & Kırtasiye', 'Market']
  return (
    <div>
      <div className="hidden m:block border-y border-brand-grey-border">
        <div className="s:max-w-[90%] mx-auto bg-white text-sm text-brand-gray-primary px-4 flex flex-row justify-center items-center menu ">
          {menu.map((el, i) => (
          <a key={i} className="relative -top-[1px] py-3 cursor-pointer border-brand-grey-border hover:border hover:rounded-t-2xl" href="/elektronik">
            <span className="flex items-center text-center w-full px-4 m:text-[12px] xl:text-sm font-medium border-r hover:border-none border-brand-grey-border">
              {el}
            </span>
          </a>
          ))}
        </div>
      </div>
      <div className="megamenu hidden border border-brand-gray-border rounded-r-2xl rounded--lb-2xl">
kforkfoekfoek
      </div>
    </div>
  )
}

export default DropDown
