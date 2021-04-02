import React from 'react'
import Header from '../../components/Header'
import ItemsCarousal from '../../components/ItemsCarousal'

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="font-bold p-5 text-xl"> Donated Items</h1>
      <ItemsCarousal />
    </div>
  )
}
