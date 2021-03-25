import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Img1 from '../../assets/classy.jpg'
import Img2 from '../../assets/profile_bg.png'

export default function SlideShow() {
    const myImgs = [Img1, Img2]

    return (
        <div>
            <div className="grid gric grid-cols-1 lg:grid-cols-12  ">
                <Carousel
                    showArrows
                    showThumbs
                    className="lg:col-span-8 lg:col-start-2  "
                >
                    {myImgs.map((img) => {
                        return (
                            <div className="border-2 border-grey rounded-xl  overflow-hidden p-1  ">
                                <img
                                    alt=""
                                    src={img}
                                    className="  object-contain max-h-96 w-full "
                                />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}
