import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import { db } from '../../firebase'

export default function AddItemForm() {
  const { t } = useTranslation()
  const categ = t('additem.cat', { returnObjects: true })
  const result = Object.keys(categ).map(key => categ[key])

  const [productData, setProductData] = useState({})

  const handleChnage = e => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    })
    console.log(productData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const userRef = db.collection('productdetails').doc()
    userRef.set(productData, { merge: true })
  }

  return (
    <div className=" bg-white p-8">
      <div className="  p-4  w-full">
        <div className="text-4xl mb-10 text-center text-darkBlue font-bold py-4 underline">
          {t('additem.new')}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8   my-4">
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="title"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.title')}
              </label>
              <input
                type="text"
                name="title"
                required
                value={productData.title}
                onChange={handleChnage}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1 p-12 item-center border-2 border-darkgray border-dashed rounded-3xl text-center">
              <FontAwesomeIcon icon="images" className="fa-3x" /> <br />
              <label
                htmlFor="photo"
                className="relative cursor-pointer bg-white rounded-md font-medium hover:text-green text-blue"
              >
                <span>{t('additem.upload')}</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:-mt-14 ">
              <label
                htmlFor="type"
                className="md:text-xl text-blue font-semibold "
              >
                {t('additem.itemtype')}
              </label>
              <br />
              <div className="inline-flex mt-2 text-center ">
                <label htmlFor="crafted">
                  <input
                    type="radio"
                    name="type"
                    className="hidden"
                    onChange={handleChnage}
                  />
                  <div className="label-checked:bg-blue label-checked:text-white  hover:bg-blue hover:text-white   border-2 border-blue  font-bold p-3 lg:w-32  rounded-l">
                    {' '}
                    {t('footer.crafted')}
                  </div>
                </label>
                <label htmlFor="used">
                  <input
                    type="radio"
                    name="type"
                    className="hidden"
                    onChange={handleChnage}
                  />
                  <div className="label-checked:bg-blue label-checked:text-white hover:bg-blue  hover:text-white border-t-2 border-b-2 border-blue font-bold p-3  lg:w-32">
                    {t('footer.used')}
                  </div>
                </label>
                <label htmlFor="donated">
                  <input
                    type="radio"
                    name="type"
                    className="hidden"
                    onChange={handleChnage}
                  />
                  <div className="label-checked:bg-blue label-checked:text-white hover:bg-blue hover:text-white  border-2 border-blue font-bold p-3  lg:w-32  rounded-r">
                    {t('footer.donated')}
                  </div>
                </label>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <label
                htmlFor="tel"
                className="md:text-xl text-blue font-semibold"
              >
                {' '}
                {t('additem.phone')}
              </label>
              <input
                type="tel"
                name="tel"
                required
                value={productData.tel}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
                onChange={handleChnage}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <label
                htmlFor="days"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.how')}
              </label>
              <input
                type="date"
                name="date"
                value={productData.date}
                required
                onChange={handleChnage}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="country"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.country')}
              </label>
              <input
                type="text"
                name="country"
                required
                value={productData.country}
                onChange={handleChnage}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="categories"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.itemcate')}
              </label>
              <br />

              <div className="flex flex-wrap text-center">
                {result.map(cate => (
                  <label htmlFor={cate.value} key={uuid()}>
                    <input
                      type="checkbox"
                      name="category"
                      id={cate.value}
                      value="checked"
                      className="hidden"
                      checked
                      onChange={handleChnage}
                    />
                    <div
                      row="1"
                      className="label-checked:bg-blue label-checked:text-white hover:text-white hover:bg-blue mr-4  mt-4 border-darkBlue  border-2  bg-blue bg-opacity-25 font-bold py-2 px-2 w-32 rounded-xl"
                    >
                      {cate.value}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="city"
                className="md:text-xl text-blue font-semibold"
              >
                {t('additem.city')}
              </label>
              <input
                type="text"
                name="city"
                required
                value={productData.city}
                onChange={handleChnage}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                htmlFor="price"
                className="md:text-xl text-blue font-semibold"
              >
                {t('proudctDetail.price')}
              </label>
              <input
                required
                type="text"
                name="price"
                value={productData.price}
                onChange={handleChnage}
                className="border-b-2 border-blue  p-3 bg-white md:text-xl w-full focus:border-darkBlue focus:outline-none"
              />
            </div>

            <div className="col-span-2 mt-4">
              <label
                htmlFor="categories"
                className="md:text-xl text-blue font-semibold"
              >
                {t('proudctDetail.description')}
              </label>

              <textarea
                cols="1"
                rows="1"
                name="description"
                required
                value={productData.description}
                className="border-b-2 border-blue  py-3 bg-white md:text-xl w-full h-24  focus:border-darkBlue focus:outline-none"
                onChange={handleChnage}
              />
            </div>

            <div className="col-span-2 lg:col-span-1 text-center">
              <button
                type="submit"
                className="py-3 px-6 border-2 border-darkBlue hover:bg-darkBlue  bg-blue text-white font-bold w-full sm:w-28"
              >
                {t('additem.add')}
              </button>
            </div>
            <div className="col-span-2 lg:col-span-1 text-center">
              <input
                value={t('additem.cancel')}
                type="reset"
                className="py-3 px-6 bg-white text-black border-2 border-darkBlue hover:bg-darkBlue hover:text-white font-bold w-full sm:w-28"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
