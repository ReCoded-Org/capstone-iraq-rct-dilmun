import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import Logo from '../../logo.svg'

export default function Navbra() {
    const [profileDropDown, setprofileDropDown] = useState(false)
    const [navCollapse, setnavCollapse] = useState(false)
    const [isLogedIn, setIsLogedIn] = useState(true)
    const { t } = useTranslation()
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang)
    }
    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue hover:text-darkBlue  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setnavCollapse(!navCollapse)}
                        >
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src={Logo}
                                alt="logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={Logo}
                                alt="logo"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    className=" text-darkBlue hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {t('navbar.home')}
                                </a>
                                <a
                                    href="/"
                                    className="text-blue hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {t('navbar.contact')}
                                </a>
                                <a
                                    href="/"
                                    className="text-blue  hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {t('navbar.about')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            onClick={() => handleLanguageChange(t('language'))}
                            type="button"
                            className=" hover:bg-darkBlue hover:text-white items-center px-3   text-blue  rounded inline-flex focus:outline-none items-center border border-solid border-blue justify-center"
                        >
                            <i className="fas fa-globe pr-1" />
                            <div className="text-center">{t('langText')}</div>
                        </button>

                        <div className="ml-3 relative">
                            <div>
                                {isLogedIn ? (
                                    <button
                                        onClick={() =>
                                            setprofileDropDown(!profileDropDown)
                                        }
                                        type="button"
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        id="user-menu"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>

                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </button>
                                ) : (
                                    <div className="bg-darkBlue  items-center  rounded-full items-center">
                                        <button
                                            type="submit"
                                            className=" py-1 px-3 bg-white  items-center  rounded-full text-darkBlue m-1    focus:outline-none  "
                                        >
                                            Log in
                                        </button>

                                        <button
                                            type="submit"
                                            className=" py-1 px-3   text-white    focus:outline-none  "
                                        >
                                            Signup
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div
                                className={`${
                                    profileDropDown ? ' show' : ' hidden'
                                } origin-top-right absolute right-0 mt-2 w-48 rounded-md items-center shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu"
                            >
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkBlue hover:text-white"
                                    role="menuitem"
                                >
                                    Your Profile
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkBlue hover:text-white "
                                    role="menuitem"
                                >
                                    Settings
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setIsLogedIn(!isLogedIn)}
                                    className="m-auto block focus:outline-none px-4 py-2 text-sm text-gray-700 hover:bg-darkBlue hover:text-white w-full"
                                    role="menuitem"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`${navCollapse ? 'show' : 'hidden'} sm:hidden`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                        href="/"
                        className="text-darkBlue block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="/"
                        className="text-blue  hover:text-darkBlue block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </a>
                    <a
                        href="/"
                        className="text-blue hover:text-darkBlue block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}
