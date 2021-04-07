import React from 'react'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function SecondaryNavbar() {
  const { t } = useTranslation()
  const catagories = t('additem.cat', { returnObjects: true })

  const result = Object.keys(catagories).map(key => catagories[key])

  return (
    <ul className="flex overflow-x-auto whitespace-nowrap p-2 justify-items-center border-b border-grey text-center shadow ">
      {result.map(catagory => {
        return (
          <li className="flex-1" key={uuid()}>
            <NavLink
              className=" hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
              to={`/searchresult/${catagory.url}`}
              activeClassName="text-darkBlue"
            >
              {catagory.value}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
