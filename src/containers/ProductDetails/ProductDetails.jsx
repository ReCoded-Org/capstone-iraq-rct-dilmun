import React from 'react'
import ContactInfoCard from '../../components/ContactInfoCard'
import ItemDetail from '../../components/ItemDetail'

export default function ProductDetails() {
    return (
        <div className=" grid justify-items-center grid-cols-1 md:grid-cols-3 container m-5 p-5">
            <div className="  col-span-2">
                <ItemDetail />
            </div>

            <div className="w-full   ">
                <ContactInfoCard />
            </div>
        </div>
    )
}
