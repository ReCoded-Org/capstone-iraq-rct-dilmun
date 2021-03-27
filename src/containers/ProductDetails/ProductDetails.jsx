import React from 'react'
import ContactInfoCard from '../../components/ContactInfoCard'
import ItemDetail, { SlideShow } from '../../components/ItemDetail'
import img from '../../assets/classy.jpg'
import { SecondaryNavbar } from '../../components/Navbar'

export default function ProductDetails() {
    return (
        <>
            <SecondaryNavbar />
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
                    <ContactInfoCard
                        profileImg={img}
                        name="name here"
                        phone="+9647755656"
                        location="Location"
                        views={10}
                        publishDate="22/22/2222"
                    />
                </div>
            </div>
        </>
    )
}
