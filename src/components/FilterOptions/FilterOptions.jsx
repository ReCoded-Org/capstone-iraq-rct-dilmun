import React from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next';
import './FilterOptions.css'

export default function FilterOptions({onChange, setMin, setMax, Min, Max, onSubmit}) {

    const { t } = useTranslation()

    return (
        <>
            <p className="text-lg font-medium mb-3">{t('proudctDetail.price')}</p>
            <form onSubmit={onSubmit}>
            <div className="flex justify-between text-sm">
                <input type="number" min="0" placeholder={t('fliter.min')} onChange={e => setMin(e.target.value)} value={Min} className="w-10 px-0.5 focus:outline-none border border-grey focus:border-blue rounded" />
                <div>&#8212;</div>
                <input type="number" placeholder={t('fliter.max')} min="1" onChange={e => setMax(e.target.value)} value={Max} className="w-10 px-0.5 focus:outline-none border border-grey focus:border-blue rounded" />
                <button type="submit" className="bg-darkblue text-white rounded-md p-1 focus:outline-none">{t('fliter.apply')}</button>
                </div>
                </form>
                <div onChange={onChange} className="flex flex-col w-32">
                    <label htmlFor="lower25" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="lower25" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.one')}</span>
                    </label>
                    <label htmlFor="lower50" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="lower50" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.two')}</span>
                    </label>
                    <label htmlFor="lower100" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="lower100" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.three')}</span>
                    </label>
                    <label htmlFor="lower200" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="lower200" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.four')}</span>
                    </label>
                    <label htmlFor="lower400" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="lower400" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.five')}</span>
                    </label>
                    <label htmlFor="infinte" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' id="infinte" className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">{t('fliter.six')}</span>
                    </label>
                </div>
            <hr className="my-4" />
        </>
    )
}

FilterOptions.propTypes = {
    onChange: PropTypes.func,
    setMin: PropTypes.func,
    setMax: PropTypes.func,
    Min: PropTypes.number,
    Max: PropTypes.number,
    onSubmit: PropTypes.func
}

FilterOptions.defaultProps = {
    onChange: () => {},
    setMin: () => {},
    setMax: () => {},
    Min: null,
    Max: null,
    onSubmit: () => {}
}