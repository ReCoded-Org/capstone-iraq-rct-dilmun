import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import bg from '../../assets/landing-Main-vector.svg'
import SearchForm from '../SearchForm'
import '../../App.css'

export default function Header() {
  const { t } = useTranslation()
  return (
    <>
      <div className=" bg-white bg-header  h-96 grid items-center justify-center  grid  grid-cols-1 md:grid-cols-11 ">
        <div className=" text-center px-20 py-8 bg-white bg-opacity-90 justify-self-center self-center md:col-span-6    ">
          <h1 className="text-md md:text-lg lg:text-xl  font-semibold mb-2 text-black">
            {t('home.slogan')}
          </h1>

          <div className="grid grid-cols-3 items-center  p-1 space-x-1 gap-3">
            <div className="col-span-3 lg:col-span-2 sm:col-span-2 md:col-span-3">
              <SearchForm />
            </div>

            <button
              type="button"
              className="bg-blue col-span-3 text-md  lg:col-span-1 sm:col-span-1 md:col-span-3 text-white py-2 text-center  space-x-1 items-center  text-center shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
            >
              <span className=""> {t('home.addItem')} </span>
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </div>
        <div className="justify-self-center md:block hidden   md:col-span-5 ">
          <img
            src={bg}
            alt="background"
            className="object-cover h-96 right-0 "
          />
        </div>
      </div>
    </>
  )
}
