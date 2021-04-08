import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { OpenModal } from '../../redux/index'

export default function AddItemBtn() {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const user = useSelector(state => state.authentication)
  const history = useHistory()
  const handleClick = () => {
    if (user.isLoggedIn) {
      history.push('/addItem')
    } else {
      dispatch(OpenModal(true))
    }
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-blue  text-md   text-white py-2 text-center  space-x-1 items-center   w-full shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
    >
      <span className=""> {t('home.addItem')} </span>
      <FontAwesomeIcon icon="plus" />
    </button>
  )
}
