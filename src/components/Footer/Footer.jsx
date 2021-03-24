import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { HOME_ROUTE, PROFILE_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE} from '../../router'
import Logo from '../../logo.svg'
import Phone from '../../assets/Phone.png';
import Email from '../../assets/email.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEmail } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
  const { t } = useTranslation()
  
    return (
        <div>
        <footer className="text-white body-font bg-darkBlue text-center">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-54 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/"
            className="flex  mx-7  ">
              <img className="lg:w-auto md:w-1/2  "
              src={Logo}
              alt="logo" />
            </a>
            <h3 className="lg:w-1/4 md:w-1/2 w-full px-4 title-font text-2xl font-medium items-center  text-center md:justify-start justify-center">
            Dilmun</h3>
            </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-center text-center">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3  border-b-2 ">{t('footer.menu')}</h2>
              <nav className="list-none mb-10">
                <li>
                <NavLink className=" hover:text-green" exact to={HOME_ROUTE}  >
                 {t('navbar.home')} </NavLink></li>
                <li>
                <NavLink className=" hover:text-green" exact to={CONTACT_ROUTE}  >
                {t('navbar.contact')} </NavLink></li>
                <li>
                <NavLink className=" hover:text-green" exact to={PROFILE_ROUTE}  >
                {t('footer.profile')} </NavLink></li>               
                <li>
                <NavLink className=" hover:text-green" exact to={ABOUT_ROUTE}  >
                {t('navbar.about')} </NavLink></li>                   
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-xl mb-3 border-b-2">{t('footer.type')}</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/" className="hover:text-green">{t('footer.crafted')}</a>
                </li>
                <li>
                  <a href="/" className="hover:text-green">{t('footer.used')}</a>
                </li>
                <li>
                  <a href="/" className="hover:text-green">{t('footer.donated')}</a>
                </li>
               
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3 border-b-2">{t('navbar.contact')}</h2>
              <nav className="list-none mb-10">
                <li>
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
                <a href="/"
                className="flex title-font items-center md:justify-start justify-center">
                  <img src={Phone} alt="Phone"  className="w-10 h-10 p-2  rounded-full" viewBox="0 0 24 24"/>
                  <FontAwesomeIcon icon={faPhone} />

                  <span >+234 081-1236-4568</span>
                </a>
              </div>
                </li>
                <li>
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
                <a href="/" className="flex title-font items-center md:justify-start justify-center">
                <FontAwesomeIcon icon={faEmail} />
                  <img src={Email} alt="Phone"  className="w-10 h-10 p-2 bg-white-500 rounded-full" viewBox="0 0 24 24"/>
                   <span >contact@Dilmun.com</span> </a>
              </div>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-xl mb-3  border-b-2">{t('footer.follow')}</h2>
              <nav className="list-none mb-10">
                <li>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="/" className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="/" className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" stroke="none" />
                </svg>
              </a>
            </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t-2 items-center  text-center md:justify-start justify-center ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
            <p className="text-white-500 text-sm  sm:text-center   text-center  "> © Copyright 2021 - Dilmun
            </p>
          </div>
        </div>
      </footer>
        </div>
    )
}
