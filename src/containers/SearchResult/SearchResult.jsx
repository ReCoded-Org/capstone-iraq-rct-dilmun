import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FilterOptions from '../../components/FilterOptions'
import { SecondaryNavbar } from '../../components/Navbar'
import bucket from '../../assets/Bucket.svg'
import arrow from '../../assets/Arrow.svg'
import SearchForm from '../../components/SearchForm'
import SearchPageCard from '../../components/SearchPageCard'
import AddItemBtn from '../../components/AddItemBtn/AddItemBtn'

export default function SearchResult() {
  const location = useLocation()
  // const { t } = useTranslation()
  const products = useSelector(state => state.products)
  const [Word, setWord] = useState('')
  const [Select, setSelect] = useState('')
  const [Min, setMin] = useState()
  const [Max, setMax] = useState()
  const [MinRange, setMinRange] = useState('')
  const [MaxRange, setMaxRange] = useState('')
  const { cat } = useParams()

  const onSubmit = e => {
    e.preventDefault()
    setMinRange(Min)
    setMaxRange(Max)
  }

  const onChange = e => {
    switch (e.target.id) {
      case 'lower25':
        setMinRange(1)
        setMaxRange(25)
        setMin('')
        setMax('')
        break
      case 'lower50':
        setMinRange(25)
        setMaxRange(50)
        setMin('')
        setMax('')
        break
      case 'lower100':
        setMinRange(50)
        setMaxRange(100)
        setMin('')
        setMax('')
        break
      case 'lower200':
        setMinRange(100)
        setMaxRange(200)
        setMin('')
        setMax('')
        break
      case 'lower400':
        setMinRange(200)
        setMaxRange(400)
        setMin('')
        setMax('')
        break
      case 'infinte':
        setMinRange(400)
        setMaxRange(100000)
        setMin('')
        setMax('')
        break
      default:
        return () => {}
    }
    return null
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get('word')
    const selectParams = new URLSearchParams(location.search).get('select')
    setWord(searchParams)
    setSelect(selectParams)
  }, [location])

  const filterProducts = () => {
    let NameFilter = []
    let DescriptionFilter = []
    let ContentFilter = []
    if (cat === undefined) {
      NameFilter = products.data.filter(item => item.productName.includes(Word))
      DescriptionFilter = products.data.filter(item =>
        item.description.includes(Word)
      )
      ContentFilter = NameFilter.concat(DescriptionFilter)
    } else {
      ContentFilter = products.data.filter(item => item.category.includes(cat))
    }

    let PriceFilter = []

    if (MinRange === '' && MaxRange === '') {
      PriceFilter = ContentFilter
    } else {
      PriceFilter = ContentFilter.filter(
        item => item.price >= MinRange && item.price <= MaxRange
      )
    }

    let StateFilter = []

    switch (Select) {
      case 'All':
        StateFilter = PriceFilter
        break
      case 'Used':
        StateFilter = PriceFilter.filter(item => item.state === 'Used')
        break
      case 'Crafted':
        StateFilter = PriceFilter.filter(item => item.state === 'Crafted')
        break
      case 'Free':
        StateFilter = PriceFilter.filter(item => item.state === 'Free')
        break
      case 'Paid':
        StateFilter = PriceFilter.filter(
          item => item.state === 'Used' || item.state === 'Crafted'
        )
        break
      case 'Donated':
        StateFilter = PriceFilter.filter(item => item.state === 'Free')
        break
      default:
        StateFilter = PriceFilter.filter(item => item)
    }
    return StateFilter.map(item => (
      <SearchPageCard
        productName={item.productName}
        productImage={item.productImage}
        price={item.price}
        date={item.date}
        views={item.views}
        state={item.state}
        description={item.description}
        location={item.location}
      />
    ))
  }

  return (
    <div>
      <SecondaryNavbar />
      <div className="grid grid-cols-6 justify-between my-8">
        <img src={bucket} alt="bucket" />
        <span className="col-span-4 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-darkblue place-self-center ">
          Find what you need with a click
        </span>
        <img src={arrow} alt="arrow" />
      </div>
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center  my-8 md:my-12 px-3 px-20 mx-20">
        <div className="col-span-1 lg:col-span-2 lg:grid lg:grid-cols-3">
=======
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center   my-8 md:my-12 px-3 px-10 sm:px-20 md:mx-20">
        <div className="col-span-1 sm:col-span-2 ">
>>>>>>> f616da0 (Style : add item button in serach result page)
          <div className="lg:col-span-2">
            <SearchForm />
          </div>
        </div>
<<<<<<< HEAD
        <AddItemBtn />
=======
        <button
          type="button"
          className="bg-blue col-span-1 text-md  lg:col-span-1 text-white py-2 text-center  space-x-1 items-center  text-center shadow-md hover:shadow-none rounded-full transition duration-300 ease-in focus:outline-none hover:bg-darkBlue px-3  "
        >
          <span className=""> {t('home.addItem')} </span>
          <FontAwesomeIcon icon="plus" />
        </button>
>>>>>>> f616da0 (Style : add item button in serach result page)
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 p-3">
        <div className="col-span-1">
          <FilterOptions
            onSubmit={onSubmit}
            onChange={onChange}
            setMin={setMin}
            setMax={setMax}
            Min={Min}
            Max={Max}
          />
        </div>
        <div className="col-span-2 sm:col-span-3 lg:col-span-5 xl:col-span-6 pt-12 justify-center flex flex-wrap">
          {products.loading === false ? filterProducts() : 'Loading data...'}
        </div>
      </div>
    </div>
  )
}
