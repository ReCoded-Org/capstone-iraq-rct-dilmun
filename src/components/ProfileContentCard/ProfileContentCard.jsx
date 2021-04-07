import React from 'react'

import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export default function ProfileContentCard({ title, content, seen, time }) {
  const { t } = useTranslation()
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

  return (
    <div className=" grid  md:px-20 md:mx-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-4 bg-white  m-3 px-4 py-2 rounded-2xl shadow-lg ">
        <div className="grid gap-2 max-h-40 overflow-auto col-span-2">
          <div className="font-bold text-xl capitalize"> {title}</div>
          <p className="">{content}</p>
        </div>

        <div className="justify-self-start md:justify-self-center grid gap-2 text-blue mt-2 md:mt-0   md:border-none border-t-2 pt-2 ">
          <div>
            <FontAwesomeIcon icon="clock" className="" /> {timing(time)}
          </div>
          <div>
            <FontAwesomeIcon icon="eye" className="mx-1" />
            {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className="justify-self-end self-center ">
          <button
            type="button"
            className="bg-red px-4 py-1 rounded-full text-white hover:shadow-none focus:outline-none shadow-md hover:bg-darkRed transition duration-300 ease-in-out "
          >
            {t('profile.delete')}
          </button>
        </div>
      </div>
    </div>
  )
}

ProfileContentCard.defaultProps = {
  title: 'Eslint sucks',
  content: 'content',
  seen: 9000,
  time: '2021-2-28',
}

ProfileContentCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  seen: PropTypes.number,
  time: PropTypes.string,
}
