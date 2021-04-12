import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import './Profile.css'
import TopProfile from '../../components/TopProfile'
import Card, { Header } from '../../components/ProfileContentCard'
import logo from '../../assets/dilmun.png'

export default function Profile() {
  const { t } = useTranslation()
  const user = useSelector(state => state.authentication)
  const products = useSelector(state => state.products)

  const [userProduct, setUserProduct] = useState()

  useEffect(() => {
    setUserProduct(
      products.data.filter(product => product.uui === user.user.uui)
    )
  }, [products])

  return (
    <div className="mb-8">
      <TopProfile />
      <hr className="mx-20 hidden sm:block" />
      <Header />

      {userProduct ? (
        userProduct.map(product => {
          return (
            <Card
              title={product.productName}
              content={product.description}
              seen={product.views}
              time={`${product.date}`}
              id={product.id}
            />
          )
        })
      ) : (
        <div className="text-blue text-xl font-bold text-center   grid  md:px-20 md:mx-20 p-5 ">
          <div className=" grid  font-bold bg-header   ">
            <div className="bg-white text-center gap-2 p-10 bg-opacity-90 shadow-inner grid justify-center  rounded-3xl">
              <h1 className="text-2xl text-yellow font-black ">
                {t('profile.oops')}
              </h1>
              <h1 className="">{t('profile.explain')}</h1>

              <img
                src={logo}
                alt=""
                className="justify-self-center  p-2  mt-3 flex space-x-2  items-center   max-h-40 "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
