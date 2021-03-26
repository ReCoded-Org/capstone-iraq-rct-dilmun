import React from 'react'
import PropTypes from 'prop-types'

import { useTranslation } from 'react-i18next'

export default function ProductDetail({ title, price, description }) {
    const { t } = useTranslation()
    return (
        <>
            <b className="block m-1">{title}</b>
            <p className="bg-yellow p-1 m-1 text-black inline-block">
                {t('proudctDetail.price')}: $ {price}
            </p>
            <b className="block m-1 mt-3"> {t('proudctDetail.description')}</b>
            <p className=" m-1 text-black ">{description}</p>
        </>
    )
}

ProductDetail.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
}

ProductDetail.defaultProps = {
    title: '',
    price: '',
    description: '',
}
