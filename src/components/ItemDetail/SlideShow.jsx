import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import noPhoto from '../../assets/noPhoto.jpg'

export default function SlideShow({ images }) {
  if (images.length < 1) {
    images.push(noPhoto)
  }
  return (
    <div>
      <div className="grid gric grid-cols-1 lg:grid-cols-12  ">
        <Carousel
          showArrows
          showThumbs
          className="lg:col-span-8 lg:col-start-2  "
        >
          {images.map(img => {
            return (
              <div
                key={uuid()}
                className="border-2 border-grey rounded-xl  overflow-hidden p-1  "
              >
                <img
                  alt=""
                  src={img}
                  className="  object-contain max-h-96 w-full "
                />
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}
SlideShow.defaultProps = {
  images: [noPhoto],
}

SlideShow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array,
}
