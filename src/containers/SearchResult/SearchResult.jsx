import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FilterOptions from '../../components/FilterOptions'
import bucket from '../../assets/Bucket.svg'
import arrow from '../../assets/Arrow.svg'
import SearchForm from '../../components/SearchForm'
import SearchPageCard from '../../components/SearchPageCard'
import AddItemBtn from '../../components/AddItemBtn/AddItemBtn'
import CheckboxFilter from '../../components/CheckboxFilter'

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
  const [Checkbox, setCheckbox] = useState([])

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
    const catParams = new URLSearchParams(location.search).get('cat')
    setWord(searchParams)
    setSelect(selectParams)

    if (!Checkbox.includes(catParams) && catParams !== null) {
      setCheckbox([...Checkbox, catParams])
    }
  }, [location])

  const filterProducts = () => {
    let NameFilter = []
    let DescriptionFilter = []
    let ContentFilter = []
    let CheckboxFilterarray = []

    NameFilter = products.data.filter(item => item.productName.includes(Word))
    DescriptionFilter = products.data.filter(item =>
      item.description.includes(Word)
    )
    ContentFilter = NameFilter.concat(DescriptionFilter)

    if (Checkbox.length) {
      CheckboxFilterarray = ContentFilter.filter(item =>
        item.category.some(itm => {
          return Checkbox.includes(itm)
        })
      )
    } else {
      CheckboxFilterarray = ContentFilter
    }

    let PriceFilter = []

    if (MinRange === '' && MaxRange === '') {
      PriceFilter = CheckboxFilterarray
    } else {
      PriceFilter = CheckboxFilterarray.filter(
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
        StateFilter = PriceFilter.filter(item => item.state === 'Donated')
        break
      case 'Paid':
        StateFilter = PriceFilter.filter(
          item => item.state === 'Used' || item.state === 'Crafted'
        )
        break
      case 'Donated':
        StateFilter = PriceFilter.filter(item => item.state === 'Donated')
        break
      default:
        StateFilter = PriceFilter.filter(item => item)
    }

    return StateFilter.map(item => (
      <SearchPageCard
        productName={item.productName}
        image={item.images ? item.images[0] : undefined}
        price={item.price}
        date={item.date}
        views={item.views}
        state={item.state}
        description={item.description}
        location={item.location}
        id={item.id}
      />
    ))
  }

  const ChangeCheckbox = e => {
    if (Checkbox.includes(e.target.id)) {
      setCheckbox(Checkbox.filter(item => item !== e.target.id))
    } else {
      setCheckbox([...Checkbox, e.target.id])
    }
  }

  return (
    <div>
      <div className="grid grid-cols-6 justify-between my-8">
        <img src={bucket} alt="bucket" />
        <span className="col-span-4 text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-darkblue place-self-center ">
          Find what you need with a click
        </span>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center   my-8  mt-12 px-10 sm:px-20 md:mx-20">
        <div className="col-span-1 sm:col-span-2 ">
          <div className="lg:col-span-2">
            <SearchForm />
          </div>
        </div>
        <AddItemBtn />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 p-3">
        <div className="col-span-1">
          <h3 className="text-2xl font-bold py-1">Filter by</h3>{' '}
          <h1 className="text-blue ">{filterProducts().length} Results</h1>
          <hr className="my-2" />
          <CheckboxFilter Checkbox={Checkbox} ChangeCheckbox={ChangeCheckbox} />
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
