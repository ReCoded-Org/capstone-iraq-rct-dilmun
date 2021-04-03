import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header'
import ItemsCarousal from '../../components/ItemsCarousal'
import { SecondaryNavbar } from '../../components/Navbar'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="">
      <Header />
      <SecondaryNavbar />
      <div className="   lg:mx-20  text-2xl p-5  ">
        <h1 className=" "> {t('home.donatedItems')}</h1>
        <ItemsCarousal condition="Free" />

        <h1 className=""> {t('home.usedItems')}</h1>
        <ItemsCarousal condition="Used" />

        <h1 className="">{t('home.craftedItems')}</h1>
        <ItemsCarousal condition="Crafted" />
      </div>
    </div>
  )
}
