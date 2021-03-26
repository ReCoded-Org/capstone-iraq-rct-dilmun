import React from 'react'

import { useTranslation } from 'react-i18next'

export default function ProductDetail() {
    const { t } = useTranslation()
    return (
        <>
            <b className="block m-1">Title Here</b>
            <p className="bg-yellow p-1 m-1 text-black inline-block">
                {t('proudctDetail.price')}: $123
            </p>
            <b className="block m-1 mt-3"> {t('proudctDetail.description')}</b>
            <p className=" m-1 text-black ">
                Description here Description here Description here Description
                here Description here Description here Description here
                Description here Description here Description here Description
                here Description here Description here Description here
                Description here Description here Description here Description
                here Description hereDescription here Description here
                Description here Description here Description here Description
                here Description here Description here Description here
                Description here
            </p>
        </>
    )
}
