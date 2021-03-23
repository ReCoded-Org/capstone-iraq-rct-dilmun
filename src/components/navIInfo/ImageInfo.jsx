import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './ImageInfo.css'
import kolara from '../../assets/kolara.png'
import dilmun from '../../assets/dilmun.png'
import classy from '../../assets/1571937503463.jpeg'

export default function ImgaeInfo() {
    return (
        <>
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
            <div id="full_top_belt">
                <img src={classy} alt="profile rasm" />
                <div id="full_top_belt_the_name">
                    <div style={{ backgroundColor: 'white' }}>
                        captain muhanned sparrow
                    </div>
                </div>
                <div id="full_top_belt_betam_trin_sht">
                    Black Pearl
                    <FontAwesomeIcon icon={faEdit} />
                    <br /> Sea is my Home
                </div>
            </div>
        </>
    )
}
