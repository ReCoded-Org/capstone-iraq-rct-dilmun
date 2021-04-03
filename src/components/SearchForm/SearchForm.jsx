import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchForm() {
  return (
    <div className="grid grid-cols-9 rounded-full border border-blue justify-center shadow-md hover:shadow-none transition duration-300 ease-in ">
      <select className="bg-white pl-1 shadow   py-2 rounded-l-full col-span-2 text-sm text-darkBlue focus:outline-none hover:bg-grey transition duration-300 ease-in">
        <option className="bg-white">All</option>
        <option className="bg-white">Free</option>
        <option className="bg-white">Paid</option>
        <option className="bg-white">Donated</option>
        <option className="bg-white">Crafted</option>
        <option className="bg-white">Used</option>
      </select>

      <input
        type="text"
        className="focus:outline-none pl-3 col-span-6 bg-pureWhite  text-center   text-xl "
        placeholder="Search"
      />

      <button
        type="button"
        className="bg-pureWhite text-darkBlue   text-xl rounded-r-full focus:outline-none hover:bg-grey transition duration-300 ease-in"
      >
        <FontAwesomeIcon icon="search-plus" className="p-1  " />
      </button>
    </div>
  )
}
