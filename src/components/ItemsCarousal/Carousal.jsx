/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

import Carousel from 'react-multi-carousel'
import LandingPageCard from '../LandingPageCard'
import 'react-multi-carousel/lib/styles.css'
import '../../App.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
}
// eslint-disable-next-line react/prop-types

export default function Carousal() {
    // eslint-disable-next-line react/prop-types

    return (
        <div>
            <Carousel
                responsive={responsive}
                draggable
                ssr
                infinite
                keyBoardControl
                centerMode
                focusOnSelect
                itemClass="grid justify-items-center p-5"
            >
                <LandingPageCard />
                <LandingPageCard />
                <LandingPageCard />
                <LandingPageCard />
                <LandingPageCard />
            </Carousel>
        </div>
    )
}
