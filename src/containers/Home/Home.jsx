import React from 'react'

import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import ItemsCarousal from '../../components/ItemsCarousal'
import { SecondaryNavbar } from '../../components/Navbar'

export default function Home() {
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <SecondaryNavbar />
      <div className="   lg:mx-20  text-2xl p-5 py-14 ">
        <button
          className="bg-yellow p-2 inline px-6 rounded-r-2xl shadow-md hover:shadow-none tansition duration-300 ease-in-out hover:cruser"
          type="button"
          onClick={() => history.push('/searchresult?word=&select=Donated')}
        >
          {t('home.donatedItems')}
        </button>
        <ItemsCarousal condition="Donated" />

        <button
          type="button"
          className="bg-yellow p-2 inline px-6 rounded-r-2xl shadow-md hover:shadow-none tansition duration-300 ease-in-out hover:cruser"
          onClick={() => history.push('/searchresult?word=&select=Used')}
        >
          {t('home.usedItems')}
        </button>
        <ItemsCarousal condition="Used" />

        <button
          type="button"
          className="bg-yellow p-2 inline px-6 rounded-r-2xl shadow-md hover:shadow-none tansition duration-300 ease-in-out hover:cruser"
          onClick={() => history.push('/searchresult?word=&select=Crafted')}
        >
          {t('home.craftedItems')}
        </button>
        <ItemsCarousal condition="Crafted" />
      </div>
    </>
  )
}
