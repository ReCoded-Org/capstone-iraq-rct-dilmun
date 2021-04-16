import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import ContactInfoCard from '../../components/ContactInfoCard'
import ItemDetail, { SlideShow } from '../../components/ItemDetail'

import { SecondaryNavbar } from '../../components/Navbar'

export default function ProductDetails() {
  function timing(date) {
    const now = moment()
    const then = moment(date)
    const seconds = now.diff(then, 'seconds')

    const week = parseInt(seconds / 604800, 10)
    const day = parseInt((seconds % 604800) / 86400, 10)
    const hour = parseInt(((seconds % 604800) % 86400) / (60 * 60), 10)
    const min = parseInt((((seconds % 604800) % 86400) / (60 * 60)) * 60, 10)

    if (week > 0) return `${week} w`

    if (day > 0) return `${day} d`

    if (hour > 0) return `${hour} h`

    return `${min} m`
  }

  const products = useSelector(state => state.products)
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(products.data.find(item => item.id === id))
  }, [products, id])

  return (
    <>
      <SecondaryNavbar />
      <div className="  lg:space-x-5 grid  grid-cols-1 lg:grid-cols-3 lg:px-20  ">
        {data ? (
          <>
            <div className=" w-full lg:col-span-2  my-20 ">
              <SlideShow images={data.images} />

              <div className="px-10 lg:px-20">
                <ItemDetail
                  title={data.productName}
                  price={data.price}
                  description={data.description}
                />
              </div>
            </div>
            <div className=" my-16   top-0 right-0 ">
              <ContactInfoCard
                name={data.userName}
                phone={data.phone ? data.phone : 'Not Provided'}
                location={data.location}
                views={data.views}
                publishDate={`${timing(data.date)} ago`}
              />
            </div>
          </>
        ) : (
          <div className="grid justify-center items-center h-screen max-w-screen-xl w-screen ">
            <FontAwesomeIcon
              icon="spinner"
              spin
              size="10x"
              className="text-blue "
            />
          </div>
        )}
      </div>
    </>
  )
}
