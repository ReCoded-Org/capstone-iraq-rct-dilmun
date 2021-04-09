import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import ContactInfoCard from '../../components/ContactInfoCard'
import ItemDetail, { SlideShow } from '../../components/ItemDetail'
// import img from '../../assets/classy.jpg'
import { SecondaryNavbar } from '../../components/Navbar'

export default function ProductDetails() {
  function timing(date) {
    const now = moment()
    const then = moment(date)
    const seconds = now.diff(then, 'seconds')
    const week = `${parseInt(seconds / 604800, 10)}W `
    const day = `${parseInt((seconds % 604800) / 86400, 10)}D `
    const m = `${parseInt(((seconds % 604800) % 86400) / (60 * 60), 10)}h ago`
    const all = week + day + m
    return all
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
              <SlideShow />
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
                name="name here"
                phone={data.phone ? data.phone : 'Not Provided'}
                location={data.location}
                views={data.views}
                publishDate={timing(data.date)}
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
