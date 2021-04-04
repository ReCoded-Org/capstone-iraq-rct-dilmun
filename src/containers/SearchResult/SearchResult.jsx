import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FilterOptions from '../../components/FilterOptions'
import { SecondaryNavbar } from '../../components/Navbar'
import bucket from '../../assets/Bucket.svg'
import arrow from '../../assets/Arrow.svg'
import SearchForm from '../../components/SearchForm'
import SearchPageCard from '../../components/SearchPageCard'

export default function SearchResult() {
  const { t } = useTranslation()
  const products = useSelector(state => state.products)
  return (
    <div>
      <SecondaryNavbar />
      <div className="grid grid-cols-6 justify-between my-8">
        <img src={bucket} alt="bucket" />
        <span className="col-span-4 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-darkblue place-self-center ">Find what you need with a click</span>
        <img src={arrow} alt='arrow' />
      </div>
      <div className="grid grid-cols-3 gap-3 items-center lg:grid-cols-5 my-8 md:my-12 px-3">
        <span className="col-span-1 font-bold text-3xl">Kids</span>
        <div className="col-span-1 lg:col-span-2 lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SearchForm />
          </div>
        </div>
        <button
              type="button"
              className="bg-blue col-span-1 text-md  lg:col-span-1 text-white py-2 text-center  space-x-1 items-center  text-center shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
            >
              <span className=""> {t('home.addItem')} </span>
              <FontAwesomeIcon icon="plus" />
            </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 p-3">
        <div className="col-span-1">
          <FilterOptions />
        </div>
        <div className="col-span-2 sm:col-span-3 lg:col-span-5 xl:col-span-6 pt-12 justify-center flex flex-wrap">
          { products.loading === false ? products.data.map(item => <SearchPageCard productName={item.productName} productImage={item.productImage} price={item.price} date={item.date} views={item.views} state={item.state} description={item.description} location={item.location} />) : 'Loading data...' } 
        </div>
      </div>
    </div>
  )
}
