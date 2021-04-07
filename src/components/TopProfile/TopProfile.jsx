import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTranslation } from 'react-i18next'
import kolara from '../../assets/kolara.png'
import dilmun from '../../assets/dilmun.png'
import userIcon from '../../assets/userIcon.png'
import { OpenSettingModal } from '../../redux'

export default function TopProfile() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.authentication)

  const { t } = useTranslation()
  return (
    <>
      <div className=" bg-white bg-profile  justify-items-stretch pt-10 h-72   grid   mb-20">
        <div className="grid grid-flow-col content-center items-center text-center  h-4 mt-2 mb-1 ">
          <div className="bg-white h-0.5 text-center  w-full object-center relative ">
            <img
              src={kolara}
              alt=""
              className="   absolute inset-x-2/4 -bottom-5 h-10 "
            />
          </div>

          <h1 className="font-bold text-xl bg-white text-center block px-5 py-1 rounded-full   ">
            {t('profile.slogan')}
          </h1>
          <hr className="bg-white h-0.5" />
        </div>

        <div className="flex justify-center h-32 mt-2">
          <img
            src={dilmun}
            alt=""
            className="h-32  p-2 mt-2 shadow rounded-xl"
          />
        </div>

        <div className="flex flex-col sm:flex-row pl-0 ml-0 sm:pl-20 sm:ml-20   sm:items-center justify-items-start">
          <div className="z-10 sm:self-start sm:-mt-5  self-center sm:justify-start">
            <img src={userIcon} alt="" className=" h-40 " />
          </div>

          <div className=" -ml-10 sm:self-center text-xl sm:items-end sm:mt-9 ">
            <div className="bg-pureWhite shadow-md pl-10 rounded-xl mb-1 py-1 pr-3  ">
              {user.user.name}
            </div>
            <div className=" grid grid-cols-2 bg-pureWhite shadow-md pl-10 rounded-xl py-1  ">
              <div className="">
                <div>{user.user.city}</div>
                <div>{user.user.phone}</div>
              </div>

              <button
                type="button"
                className=" px-3 justify-self-end text-darkgray text-sm hover:text-black transition duration-300 ease-in-out cursor-pointer focus:outline-none "
                onClick={() => dispatch(OpenSettingModal())}
              >
                <FontAwesomeIcon icon="edit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
