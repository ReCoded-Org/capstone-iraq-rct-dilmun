import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom'
import Image from '../../assets/profile_bg.png'

export default function LandingPageCard({
  productName,
  description,
  location,
  date,
  views,
  productImage,
  price,
  state,
  id,
}) {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/productdetails/${id}`)
  }
  return (
    <div
      className="w-72 h-96 bg-white rounded-3xl focus:outline-none relative shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="link"
      tabIndex={0}
    >
      <dev className="relative">
        <img
          src={productImage}
          alt="item card"
          className="bg-cover bg-center rounded-t-3xl"
        />
        <div className="bg-red px-3 py-1 absolute top-44 left-3 rounded-md text-sm">
          {price > 0 ? price : state}
        </div>
      </dev>
      <div className="px-3 grid">
        <div className="text-2xl mt-5">{productName}</div>
        <p className="text-xs h-24 overflow-y-hidden ">{description}</p>
        <div className="text-xs flex justify-between px-4 absolute inset-x-0 bottom-2 ">
          <div className="flex space-x-1">
            <FontAwesomeIcon icon="eye" />
            <p className="">{views}</p>
          </div>
          <div className="flex space-x-5 ">
            <div className="flex space-x-1">
              <FontAwesomeIcon icon="clock" />
              <p>{date.slice(0, 10)}</p>
            </div>
            <div className="flex space-x-1">
              <FontAwesomeIcon icon="map-marker-alt" />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LandingPageCard.propTypes = {
  id: PropTypes.number,
  productName: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  views: PropTypes.number,
  price: PropTypes.number,
  state: PropTypes.string,
  productImage: PropTypes.string,
  location: PropTypes.string,
}

LandingPageCard.defaultProps = {
  id: 0,
  productName: '',
  description: '',
  date: '',
  views: 0,
  price: 0,
  state: 'unknown',
  productImage: Image,
  location: '',
}
