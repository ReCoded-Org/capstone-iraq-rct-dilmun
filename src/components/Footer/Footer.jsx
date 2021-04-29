import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HOME_ROUTE,
  PROFILE_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
} from '../../router'
import Logo from '../../logo.svg'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="text-white body-font  bg-darkBlue text-center">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-54 flex-shrink-0 md:mx-0 mx-auto  md:text-left">
          <a href="/" className="flex  mx-6  ">
            <img className="lg:w-auto md:w-1/2  " src={Logo} alt="logo" />
          </a>
          <h3 className="text-2xl font-medium">Dilmun</h3>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-10 -mb-10 md:mt-0 mt-6 md:text-center">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4 ">
            <h2 className="font-medium tracking-widest text-xl mb-3  border-b-2 ">
              {t('footer.menu')}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink className=" hover:text-darkgray" exact to={HOME_ROUTE}>
                  {t('navbar.home')}{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-darkgray" exact to={CONTACT_ROUTE}>
                  {t('navbar.contact')}{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-darkgray" exact to={PROFILE_ROUTE}>
                  {t('footer.profile')}{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className=" hover:text-darkgray" exact to={ABOUT_ROUTE}>
                  {t('navbar.about')}{' '}
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-white-900 tracking-widest text-xl mb-3 border-b-2">
              {t('footer.type')}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href='/searchresult?word=&select=Crafted' className="hover:text-darkgray">
                  {t('footer.crafted')}
                </a>
              </li>
              <li>
                <a href='/searchresult?word=&select=Used' className="hover:text-darkgray">
                  {t('footer.used')}
                </a>
              </li>
              <li>
                <a href='/searchresult?word=&select=Donated' className="hover:text-darkgray">
                  {t('footer.donated')}
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="font-medium  tracking-widest text-xl mb-3 border-b-2">
              {t('navbar.contact')}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="flex-shrink item-center justify-center ">
                  <div>
                    <a href="tel:+234081-1236-4568">
                      <FontAwesomeIcon
                        icon="phone"
                        className="hover:text-darkgray "
                      />
                      <span>+234 081-1236-4568</span>
                    </a>
                  </div>
                  <div>
                    <a href="mailto:contact@Dilmun.com">
                      <FontAwesomeIcon
                        icon="envelope"
                        className="hover:text-darkgray "
                      />{' '}
                      <span>contact@Dilmun.com</span>
                    </a>
                  </div>
                </div>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium  tracking-widest text-xl mb-3  border-b-2">
              {t('footer.follow')}
            </h2>
            <nav className="list-none mb-10">
              <li>
                <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start ">
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="hover:text-darkgray fa-2x mx-2"
                    />
                  </a>
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon
                      icon={['fab', 'facebook-square']}
                      className="hover:text-darkgray fa-2x mx-2"
                    />
                  </a>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t-2">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col">
          <p className="text-sm "> © Copyright 2021 - Dilmun</p>
        </div>
      </div>
    </footer>
  )
}
