import React from 'react'
import FilterOptions from '../../components/FilterOptions/FilterOptions'

export default function SearchResult() {
  return (
    <div className="grid sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 p-3">
      <div className="grid grid-col-1">
        <FilterOptions />
      </div>
    </div>
  )
}
