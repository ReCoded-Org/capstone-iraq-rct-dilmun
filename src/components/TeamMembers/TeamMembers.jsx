import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import havalImg from '../../assets/haval.jfif'

export default function TeamMembers() {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-8">
      <div className="text-4xl mb-10 text-center my-5 text-darkBlue font-bold  ">
        {' '}
        {t('about.meet')}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-14 mx-4">
        <div className="flex flex-col text-center items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
            <img src={havalImg} alt="" />
          </div>

          <h2 className="mt-4 font-bold text-xl">{t('about.haval')}</h2>

          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/haval95"
                className="flex hover:bg-blue items-center justify-center h-8 w-8 border rounded-full "
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
            <FontAwesomeIcon
              icon="user"
              className="h-full w-full fa-6x mx-auto justify-center items-center"
            />
          </div>

          <h2 className="mt-4 font-bold text-xl">{t('about.ismail')}</h2>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/ismailkhalil20"
                className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full "
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
            <FontAwesomeIcon
              icon="user"
              className="h-full w-full fa-6x mx-auto justify-center items-center"
            />
          </div>

          <h2 className="mt-4 text-center font-bold text-xl">
            {t('about.sima')}
          </h2>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/Sima-J"
                className="flex hover:bg-blue  items-center justify-center h-8 w-8 border rounded-full "
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border rounded-full overflow-hidden h-40 w-40">
            <FontAwesomeIcon
              icon="user"
              className="h-full w-full fa-6x mx-auto justify-center items-center"
            />
          </div>

          <h2 className="mt-4 font-bold text-xl">{t('about.kodo')} </h2>
          <ul className="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href="https://github.com/kodo-yousif"
                className="flex hover:bg-blue items-center justify-center h-8 w-8 border rounded-full "
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
