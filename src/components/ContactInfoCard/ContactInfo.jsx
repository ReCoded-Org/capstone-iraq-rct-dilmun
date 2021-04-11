import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import userIcon from '../../assets/userIcon.png'

export default function ContactInfo({
  profileImg,
  name,
  phone,
  location,
  views,
  publishDate,
}) {
  const { t } = useTranslation()
  return (
    <div className="lg:rounded-3xl overflow-hidden lg:shadow-lg  my-3 border border-grey">
      <div className="flex justify-center p-3">
        <img
          src={profileImg}
          className="shadow rounded-full h-40 w-40 align-middle border-none object-cover"
          alt="profile"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h1 className="text-black font-bold bold font-sans">{name}</h1>
      </div>
      <div className="flex justify-center shadow-lg align-middle content-center p-3 text-white bg-darkBlue">
        <div className="text-center  ">
          <h2>{t('proudctDetail.callTheOwner')}</h2>

          <span>
            <FontAwesomeIcon
              icon="phone"
              className="text-white align-middle"
              flip="horizontal"
            />
            <a href={`tel:${phone}`} className="align-middle">
              &nbsp;{phone}
            </a>
          </span>
        </div>
      </div>

      <div className="pt-4 px-4">
        <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max border-b border-grey ">
          <div className="text-center text-darkBlue px-2">
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className="  ">
            <span>{location}</span>
          </div>
        </div>
        <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max border-b border-grey">
          <div className="text-center text-darkBlue px-2">
            <FontAwesomeIcon icon="eye" />
          </div>
          <div className="  ">
            <span>{views}</span>
          </div>
        </div>

        <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max  ">
          <div className="text-center text-darkBlue px-2">
            <FontAwesomeIcon icon="clock" />
          </div>
          <div className="  ">
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactInfo.propTypes = {
  profileImg: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  views: PropTypes.number,
  publishDate: PropTypes.string,
}

ContactInfo.defaultProps = {
  profileImg: userIcon,
  name: 'Not Provided',
  phone: '',
  location: '',
  views: 0,
  publishDate: '',
}
