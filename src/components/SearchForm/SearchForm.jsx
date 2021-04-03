import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchForm() {
  return (
    <div className="flex h-8 shadow-xl w-60 sm:w-80 bg-white rounded-md ring-1 outline-none">
      <div className="h-full">
        <select className="h-full w-auto bg-pureblack focus:outline-none text-xs">
          <option className="bg-white">All</option>
          <option className="bg-white">Free</option>
          <option className="bg-white">Paid</option>
          <option className="bg-white">Donated</option>
          <option className="bg-white">Crafted</option>
          <option className="bg-white">Used</option>
        </select>
      </div>

      <input
        type="text"
        className="focus:outline-none w-full h-full px-2 focus"
        placeholder="Search"
      />

      <div className="w-10 h-full w-12">
        <FontAwesomeIcon icon="search-plus" className="h-full ml-2 w-10" />
      </div>
    </div>
  )
}
