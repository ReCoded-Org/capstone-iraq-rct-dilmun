import React, { Fragment } from 'react'
import './ImageInfo.css'
import kolara from '../../assets/kolara.png'
import dilmun from '../../assets/dilmun.png'

export default function ImgaeInfo() {
    return (
        // eslint-disable-next-line react/jsx-fragments
        <Fragment>
            <div id="full_top_image_toper">
                <img id="full_top_image_dilmun" src={dilmun} alt="dilmun" />
                <div id="full_top_white_line">
                    <img src={kolara} alt="kolara" />
                    <span>
                        Dilmun Should be your first choice to buy or sell
                        anything!
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
