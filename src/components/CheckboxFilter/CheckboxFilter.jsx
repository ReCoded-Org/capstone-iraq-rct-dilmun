import React from 'react'
import { useTranslation } from 'react-i18next';

export default function CheckboxFilter() {
    const { t } = useTranslation()
    const catagories = t('additem.cat', { returnObjects: true })


    const result = Object.keys(catagories).map(key => catagories[key])
    return (
        <div className="flex flex-col">
            <p className=" text-lg font-medium mb-3">Category</p>
            { result.map(category => {
                return (
                    <label htmlFor={category.url} className="inline-flex items-center mt-3">
                        <input type="checkbox" id={category.url} className="h-5 w-5"/><span className="ml-2">{category.value}</span>
                    </label>
                )
            })}
            <hr className="my-4" />
        </div>
    )
}
