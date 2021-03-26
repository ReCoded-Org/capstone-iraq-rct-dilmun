import React from 'react'
import ContactInfoCard from '../../components/ContactInfoCard'
import ItemDetail, { SlideShow } from '../../components/ItemDetail'

export default function ProductDetails() {
    return (
        <div className="  lg:space-x-5 grid  grid-cols-1 lg:grid-cols-3 lg:mx-20  ">
            <div className=" w-full md:col-span-2 my-20 ">
                <SlideShow />
                <ItemDetail
                    title="title"
                    price={10}
                    description="description"
                />
            </div>

            <div className="lg:w-10/12 w-full  my-20 justify-self-center">
                <ContactInfoCard />
            </div>
        </div>
    )
}
