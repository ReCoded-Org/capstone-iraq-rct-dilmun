import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../../assets/profile_bg.png'


export default function LandingPageCard() {
    return (
        <div className="w-72 h-96 bg-white rounded-3xl relative">
            <dev className="relative">
                <img src={Image} alt='item card' className='bg-cover bg-center rounded-t-3xl' />
                <div className="bg-red px-3 py-1 absolute top-44 left-3 rounded-md text-sm">200$</div>
            </dev>
            <div className="px-2">
                <div className="text-2xl mt-5">
                    Printer
                </div>
                <div className="text-xs">
                    Premium pepperoni and cheese is made with real mozzarella on original 
                    hand-tossed crust. Premium pepperoni and cheese is made with real 
                    mozzarella on original hand-tossed crust.
                </div>
                <div className="text-xs flex justify-between mx-3 absolute inset-x-0 bottom-2">
                    <div className="flex space-x-1">
                        <FontAwesomeIcon icon="eye" />
                        <p className="">245</p>
                    </div>
                    <div className="flex space-x-1">
                        <FontAwesomeIcon icon="clock" />
                        <p>10/3/2020</p>
                        <FontAwesomeIcon icon="map-marker-alt" />
                        <p>Erbil</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
