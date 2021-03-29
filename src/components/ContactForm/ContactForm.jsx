import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactForm() {
  const { t } = useTranslation()
  const pnum = '+234081-1236-4568'
  const em = 'contact@Dilmun.com'

  return (
    <div className=" bg-white">
      <div className="relative flex items-top justify-center sm:items-center sm:pt-0  ">
        <div className="max-w-5xl  sm:px-6 lg:px-8 m-8 border-2 border-darkgray rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-blue mt-6 font-extrabold text-center mx-14 border-b-2">
            {t('cform.cont')}
          </h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 mx-6 ">
            <form className=" flex flex-col  mt-2">
              <p className="text-normal text-lg sm:text-2xl mt-8">
                {t('cform.leve')}{' '}
              </p>
              <div>
                <label htmlFor="name" className="hidden">
                  {t('cform.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t('cform.name')}
                  className="w-full mt-2 py-3 px-1  bg-white  border  font-semibold focus:border-darkgray focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="hidden">
                  {t('cform.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={t('cform.email')}
                  className="w-full mt-2 py-3 px-1 bg-white  border   font-semibold focus:border-darkgray focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="hidden">
                  {t('cform.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={t('cform.message')}
                  className="w-full mt-2 h-40 px-1 bg-white  border  font-semibold focus:border-darkgray focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full mb-10
                                                     bg-blue hover:bg-blue-dark text-white font-bold py-3 px-24  mt-3 hover:bg-darkBlue transition ease-in-out duration-300"
                >
                  {t('cform.send')}
                </button>
              </div>
            </form>
            <div className="flex items-center mt-4 hidden md:flex ">
              <div className="flex-shrink-0 md:mx-20 mx-auto justify-center md:text-left md:justify-start ">
                <div>
                  <a href={`tel:${pnum}`}>
                    <FontAwesomeIcon
                      icon="phone"
                      className="hover:text-green "
                    />
                    <span>+234081-1236-4568</span>
                  </a>
                </div>
                <div>
                  <a href={`mailto:${em}`}>
                    <FontAwesomeIcon
                      icon="envelope"
                      className="hover:text-green "
                    />{' '}
                    <span>contact@Dilmun.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" justify-center text-center max-w-screen-md p-8 lg:mx-auto">
        <p className="text-lg  sm:text-2xl text-blue font-bold ">
          {t('cform.disc')}
        </p>
        <p className="text-base sm:text-lg text-black ">{t('cform.desc')}</p>
      </div>
    </div>
  )
}
