import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from '../../assets/profile_bg.png'

export default function SearchPageCard() {
    return (
        <div className="w-52 h-72 bg-white shadow-lg mx-6 relative">
            <img src={Profile} alt="car" className="bg-contain bg-center" />
            <div className="absolute bg-orange top-0 left-0 px-2">Used</div>
            <div className="font-bold my-2 ml-1">Pepparoni Pizza</div>

            <div className="flex items-center ml-1 space-x-2">
                <p className="text-xs h-12 overflow-ellipsis overflow-hidden ">
                    Premium pepperoni and cheese is made with real mozzarella on
                    original hand-tossed crust. Premium pepperoni and cheese is
                    made with real mozzarella on original hand-tossed crust.
                </p>
                <div className="bg-yellow text-xs font-black px-3 rounded-l py-1.5">
                    Free
                </div>
            </div>

            <div className="text-xs flex justify-between mx-1 absolute inset-x-0 bottom-0">
                <div className="flex space-x-0.5">
                    <FontAwesomeIcon icon="eye" />
                    <p className="">245</p>
                </div>
                <div className="flex space-x-0.5">
                    <FontAwesomeIcon icon="clock" />
                    <p>10/3/2020</p>
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <p>Erbil</p>
                </div>
            </div>
        </div>
    )
}
