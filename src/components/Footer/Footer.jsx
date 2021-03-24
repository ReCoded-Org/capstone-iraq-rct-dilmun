import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { HOME_ROUTE, PROFILE_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE} from '../../router'
import Logo from '../../logo.svg'


export default function Footer() {
  const { t } = useTranslation()
  
    return (
        <footer className="text-white body-font  bg-darkBlue text-center">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-54 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/"
            className="flex  mx-6  ">
              <img className="lg:w-auto md:w-1/2  "
              src={Logo}
              alt="logo" />
            </a>
            <h3 className="lg:w-1/4 md:w-1/2 w-full px-4 text-2xl font-medium items-center  text-center md:justify-start justify-center">
            Dilmun</h3>
            </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-center text-center">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4 ">
              <h2 className="font-medium tracking-widest text-xl mb-3  border-b-2 ">{t('footer.menu')}</h2>
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
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-white-900 tracking-widest text-xl mb-3 border-b-2">{t('footer.type')}</h2>
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
              <h2 className="font-medium text-gray-900 tracking-widest text-xl mb-3 border-b-2">{t('navbar.contact')}</h2>
              <nav className="list-none mb-10">
                <li>
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
                <a href="/"
                className="flex items-center md:justify-start justify-center">
                  <FontAwesomeIcon icon={faPhone}  className="hover:text-green mr-2"/><span >+234 081-1236-4568</span>
                </a>
              </div>
                </li>
                <li>
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
                <a href="/" className="flex items-center md:justify-start justify-center">
                <FontAwesomeIcon icon={faEnvelope}  className="hover:text-green mr-2"/>
                   <span >contact@Dilmun.com</span> </a>
              </div>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-white-900 tracking-widest text-xl mb-3  border-b-2">{t('footer.follow')}</h2>
              <nav className="list-none mb-10">
                <li>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a href="https://www.instagram.com/" className="flex  mx-2 items-center md:justify-start justify-center">
                <FontAwesomeIcon icon={faInstagram}  className="hover:text-green fa-2x"/></a>
                <a href="https://www.facebook.com/" className="flex items-center   mx-2 md:justify-start justify-center ">
                <FontAwesomeIcon icon={faFacebook}  className="hover:text-green fa-2x"/></a>

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
    )
}
