import React from 'react'
import uuid from 'react-uuid'
import { NavLink } from 'react-router-dom'

export default function SecondaryNavbar() {
  const catagories = ['item1', 'item2', 'item3', 'item4']

  return (
    <ul className="flex overflow-x-auto whitespace-nowrap p-2 justify-items-center border-b border-grey text-center ">
      {catagories.map(catagory => {
        return (
          <li className="flex-1" key={uuid()}>
            <NavLink
              className=" hover:text-darkBlue px-3 py-2 rounded-md text-sm font-medium"
              to={`/${catagory}`}
              activeClassName="text-darkBlue"
            >
              {catagory}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
