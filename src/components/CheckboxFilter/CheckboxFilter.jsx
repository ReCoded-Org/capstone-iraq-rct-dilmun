import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function CheckboxFilter({ChangeCheckbox}) {
    const { t } = useTranslation()
    const catagories = t('additem.cat', { returnObjects: true })


    const result = Object.keys(catagories).map(key => catagories[key])
    return (
        <div onChange={ChangeCheckbox} className="flex flex-col">
            <p className=" text-lg font-medium mb-3">Category</p>
            { result.map(category => {
                return (
                    <label htmlFor={category.value} className="inline-flex items-center mt-3">
                        <input type="checkbox" id={category.value} className="h-5 w-5"/><span className="ml-2">{category.value}</span>
                    </label>
                )
            })}
            <hr className="my-4" />
        </div>
    )
}

CheckboxFilter.propTypes = {
    ChangeCheckbox: PropTypes.func
}

CheckboxFilter.defaultProps = {
    ChangeCheckbox: () => {}
}