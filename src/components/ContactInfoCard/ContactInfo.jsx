import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTranslation } from 'react-i18next'

export default function ContactInfo() {
    const { t } = useTranslation()
    return (
        <div className="rounded-3xl overflow-hidden shadow-lg  my-3 ">
            <div className="flex justify-center p-3">
                {
                    //    <img
                    //         src={userIcon}
                    //         className="rounded-full border-solid border-white border-2 "
                    //         alt="profile"
                    //     />
                }
                <FontAwesomeIcon
                    icon="user-circle"
                    size="7x"
                    className="text-blue"
                />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h1 className="text-black font-bold bold font-sans">
                    Name here
                </h1>
            </div>
            <div className="flex justify-center shadow-lg align-middle content-center p-3 text-white bg-darkBlue">
                <div className="text-center  ">
                    <h2>{t('proudctDetail.callTheOwner')}</h2>

                    <span>
                        <FontAwesomeIcon
                            icon="phone"
                            className="text-white align-middle"
                            flip="horizontal"
                        />
                        <a href="tel:+628967062" className="align-middle">
                            &nbsp;+964-750-123-3355
                        </a>
                    </span>
                </div>
            </div>

            <div className="p-4">
                <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max border-b border-grey ">
                    <div className="text-center text-darkBlue px-2">
                        <FontAwesomeIcon icon="map-marker-alt" />
                    </div>
                    <div className="  ">
                        <span>Erbil-erbil erbi</span>
                    </div>
                </div>
                <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max border-b border-grey">
                    <div className="text-center text-darkBlue px-2">
                        <FontAwesomeIcon icon="eye" />
                    </div>
                    <div className="  ">
                        <span>254</span>
                    </div>
                </div>

                <div className=" py-2 gap-4 grid grid-flow-col auto-cols-max">
                    <div className="text-center text-darkBlue px-2">
                        <FontAwesomeIcon icon={['far', 'clock']} />
                    </div>
                    <div className="  ">
                        <span>22/22/2222</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
