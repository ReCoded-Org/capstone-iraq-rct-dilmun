import React from 'react'

import Carousel from 'react-multi-carousel'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import LandingPageCard from '../LandingPageCard'
import 'react-multi-carousel/lib/styles.css'
import '../../App.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

export default function Carousal({ condition }) {
  const products = useSelector(state => state.products)

  return (
    <Carousel
      responsive={responsive}
      draggable
      ssr
      infinite
      keyBoardControl
      itemClass="grid justify-items-center p-6 my-5"
    >
      {products.loading === false ? (
        products.data
          .filter(item => item.state === condition)
          .map(item => {
            return (
              <div key={uuid()}>
                <LandingPageCard
                  id={item.id}
                  productName={item.productName}
                  description={item.description}
                  date={item.date}
                  views={item.views}
                  price={Number(item.price)}
                  state={item.state}
                  location={item.location}
                  image={item.images ? item.images[0] : undefined}
                />
              </div>
            )
          })
      ) : (
        <div>No data...</div>
      )}
    </Carousel>
  )
}

Carousal.propTypes = {
  condition: PropTypes.string,
}

Carousal.defaultProps = {
  condition: '',
}
