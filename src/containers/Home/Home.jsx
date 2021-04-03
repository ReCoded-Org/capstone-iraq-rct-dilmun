import React from 'react'
import Header from '../../components/Header'
import ItemsCarousal from '../../components/ItemsCarousal'

export default function Home() {

  return (
<<<<<<< HEAD
    <div>
      <Header />
=======
    <div className="mt-10 mb-6">
>>>>>>> 7a8d68f (Feat: Display the data on the landing page)
      <h1 className="font-bold p-5 text-xl"> Donated Items</h1>
      <ItemsCarousal condition='Free' />

      <h1 className="font-bold mt-10 p-5 text-xl"> Used Items</h1>
      <ItemsCarousal condition='Used' />

      <h1 className="font-bold mt-10 p-5 text-xl"> Crafted Items</h1>
      <ItemsCarousal condition='Crafted' />
    </div>
  )
}
