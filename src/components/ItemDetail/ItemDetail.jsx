import React from 'react'
import PropTypes from 'prop-types'

import { useTranslation } from 'react-i18next'

export default function ProductDetail({ title, price, description }) {
  const { t } = useTranslation()
  return (
    <>
      <b className="block m-1 text-2xl">{title}</b>
      <p className="bg-yellow p-2 rounded-r-full m-1 text-black inline-block ">
        {t('proudctDetail.price')}: $ {price}
      </p>
      <b className="block m-1 mt-3"> {t('proudctDetail.description')}</b>
      <p className=" m-1 mt-2 text-black bg-white rounded shadow-inner p-3 text-justify">
        {description}
      </p>
    </>
  )
}

ProductDetail.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
}

ProductDetail.defaultProps = {
  title: '',
  price: 0,
  description: '',
}
