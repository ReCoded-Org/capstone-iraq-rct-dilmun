import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import { useToasts } from 'react-toast-notifications'
import { db, storageRef } from '../../firebase'
import { FetchProducts } from '../../redux'

export default function AddItemForm() {
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const { t } = useTranslation()
  const user = useSelector(state => state.authentication)

  const categ = t('additem.cat', { returnObjects: true })
  const result = Object.keys(categ).map(key => categ[key])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [Images, setImages] = useState([])

  const [productData, setProductData] = useState({
    categories: {},
  })

  useEffect(() => {
    setProductData({
      ...productData,
      tel: user.user.phone,
      city: user.user.city,
      date: new Date().toString(),
    })
  }, [user])

  const removeImg = index => {
    const imgs = [...Images]
    imgs.splice(index, 1)
    setImages(imgs)
  }

  const handleChnage = e => {
    if (e.target.name === 'category') {
      if (e.target.checked) {
        setSelectedCategories([...selectedCategories, e.target.id])
      } else {
        setSelectedCategories(
          selectedCategories.filter(item => item !== e.target.id)
        )
      }
      setProductData({
        ...productData,
        categories: {
          ...productData.categories,
          [e.target.id]: e.target.checked,
        },
      })
    } else if (e.target.name === 'itemType') {
      setProductData({
        ...productData,
        itemType: e.target.id,
      })
    } else if (e.target.name === 'imageInput') {
      if (e.target.files.length + Images.length < 5) {
        setImages([...Images, ...e.target.files])
      }
    } else {
      setProductData({
        ...productData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const userRef = db.collection('products').doc('00000')
    const ImageRef = []

    for (let i = 0; i < Images.length; i += 1) {
      const fileRef = storageRef.child(Images[i].name)
      // eslint-disable-next-line no-await-in-loop
      await fileRef.put(Images[i])
      ImageRef.push(Images[i].name)
    }

    userRef
      .set(
        {
          productName: productData.title,
          price: productData.price,
          phone: productData.tel,
          date: productData.date,
          description: productData.description,
          location: productData.city,

          state: productData.itemType,
          userName: user.user.name,
          category: selectedCategories,
          uui: user.user.uui,
          images: ImageRef,
        },
        { merge: true }
      )

      .then(() => {
        dispatch(FetchProducts)
      })
    const item = productData.title.toUpperCase()

    addToast(` | ${item} | ${t('toast.successAdd')}`, {
      appearance: 'success',
    })
    setProductData({
      tel: user.user.phone,
      city: user.user.city,
      date: new Date().toString(),
      title: '',
      price: '',
      description: '',

      productImage: '',
      itemType: '',
      category: null,
      uui: user.user.uui,
      images: '',
    })
  }

  return (
    <div className=" bg-pureWhite p-8">
      <div className="  p-4  w-full">
        <div className="text-4xl mb-10 text-center text-darkBlue font-bold py-4  shadow rounded border">
          {t('additem.new')}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1    gap-8 md:grid-cols-11   my-4 ">
            <div className="grid gap-10  md:col-span-6">
              <div>
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
                  className="border-b-2 border-blue  p-3  md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
              </div>
              <div className="">
                <label
                  htmlFor="price"
                  className="md:text-xl text-blue font-semibold"
                >
                  {t('proudctDetail.price')} $
                </label>
                <input
                  required
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChnage}
                  className="border-b-2 border-blue  p-3  md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
              </div>
              <div className=" ">
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
                      required
                      name="itemType"
                      id="crafted"
                      className="hidden"
                      onChange={handleChnage}
                    />
                    <div className="label-checked:bg-blue label-checked:text-white  hover:bg-blue hover:text-white   border-2 border-blue  font-bold p-3 lg:w-32  rounded-l">
                      {t('footer.crafted')}
                    </div>
                  </label>
                  <label htmlFor="used">
                    <input
                      type="radio"
                      required
                      name="itemType"
                      id="used"
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
                      required
                      name="itemType"
                      id="donated"
                      className="hidden"
                      onChange={handleChnage}
                    />
                    <div className="label-checked:bg-blue label-checked:text-white hover:bg-blue hover:text-white  border-2 border-blue font-bold p-3  lg:w-32  rounded-r">
                      {t('footer.donated')}
                    </div>
                  </label>
                </div>
              </div>
              <div className=" ">
                <label
                  htmlFor="categories"
                  className="md:text-xl text-blue font-semibold"
                >
                  {t('additem.itemcate')}
                </label>
                <br />

                <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-3 xl:grid-cols-4">
                  {result.map(cate => (
                    <label htmlFor={cate.value} key={uuid()}>
                      <input
                        type="checkbox"
                        name="category"
                        id={cate.value}
                        checked={
                          productData.categories
                            ? productData.categories[cate.value]
                            : false
                        }
                        className="hidden"
                        onChange={handleChnage}
                      />
                      <div
                        row="1"
                        className="label-checked:bg-blue label-checked:border-blue label-checked:shadow-none label-checked:text-white hover:bg-opacity-25  hover:bg-blue  shadow-md      border border-grey bg-opacity-25 font-bold py-2 px-3 md:px-6 rounded-xl transition duration-300 ease-in-out hover:shadow-none"
                      >
                        {cate.value}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-10 md:col-span-5">
              <div className=" p-12 item-center border-2 border-blue border-dashed rounded-3xl text-center">
                <div className="grid  pb-4 p-1   ">
                  <FontAwesomeIcon
                    icon="images"
                    className="fa-3x my-3 text-blue justify-self-center"
                  />
                  {Images[0] ? (
                    Images.map((img, index) => {
                      return (
                        <div className="m-1 grid grid-cols-12  rounded   border px-0  ">
                          <p className="bg-blue rounded-l inline py-1   text-white text-center col-span-1">
                            {index + 1}
                          </p>
                          <p className="px-2 self-center text-left col-span-10 overflow-hidden">
                            {img.name}
                          </p>

                          <button
                            type="button"
                            className="text-red border-l focus:outline-none  justify-self-end px-2 rounded-r col-span-1"
                            onClick={() => removeImg(index)}
                          >
                            X
                          </button>
                        </div>
                      )
                    })
                  ) : (
                    <p>{t('additem.noImg')}</p>
                  )}
                </div>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer  rounded-md font-medium hover:shadow-none shadow-lg transition duration-300 ease-in-out hover:bg-darkBlue text-white bg-blue py-2 px-2"
                >
                  <span>{t('additem.upload')}</span>
                  <input
                    id="file-upload"
                    name="imageInput"
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    className="sr-only"
                    onChange={handleChnage}
                  />
                </label>
              </div>
              <div className=" ">
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
                  className="border-b-2 border-blue  p-3   md:text-xl w-full focus:border-darkBlue focus:outline-none"
                  onChange={handleChnage}
                />
              </div>

              <div className="">
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
                  className="border-b-2 border-blue  p-3   md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-11">
              <label
                htmlFor="Description"
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
                className="border-b-2 border-blue  py-3   md:text-xl w-full h-24  focus:border-darkBlue focus:outline-none"
                onChange={handleChnage}
              />
            </div>

            <div className="md:col-span-5  text-center">
              <button
                type="submit"
                className="py-3 px-6 rounded-2xl focus:outline-none shadow-md hover:shadow-none  bg-blue text-white font-bold w-full sm:w-28 transition duration-300  ease-in-out"
              >
                {t('additem.add')}
              </button>
            </div>
            <div className="md:col-span-5  text-center">
              <input
                value={t('additem.cancel')}
                type="reset"
                className="py-3 px-6   focus:outline-none text-blue shadow-md hover:shadow-none border rounded-2xl border-blue hover:bg-blue hover:text-white font-bold w-full sm:w-28 transition duration-300  ease-in-out"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
