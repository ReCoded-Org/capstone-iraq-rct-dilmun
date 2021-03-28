import React from 'react'
import ItemsCarousal from '../../components/ItemsCarousal'

export default function Home() {
    return (
        <div>
            Home Page
            <h1 className="font-bold p-5 text-xl"> Donated Items</h1>
            <ItemsCarousal />
        </div>
    )
}
