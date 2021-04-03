import React from 'react'
import './FilterOptions.css'

export default function FilterOptions() {
    return (
        <>
            <h3 className="text-2xl font-bold">Filter by</h3>
            <hr className="my-4" />
            <p className="text-lg font-medium">Price</p>
            <div className="flex justify-between text-sm">
                <input type="number" min="0" placeholder="Min" className="w-10 px-0.5 focus:outline-none border border-grey focus:border-blue rounded" />
                <div>&#8212;</div>
                <input type="number" placeholder="Max" min="1" className="w-10 px-0.5 focus:outline-none border border-grey focus:border-blue rounded" />
                <button type="button" className="bg-darkblue text-white rounded-md p-1 focus:outline-none">Apply</button>
            </div>
            <form onChange>
                <div className="flex flex-col w-32">
                    <label htmlFor="25" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">Under 25$</span>
                    </label>
                    <label htmlFor="50" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">25$ - 50$</span>
                    </label>
                    <label htmlFor="100" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">50$ - 100$</span>
                    </label>
                    <label htmlFor="200" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">100$ - 200$</span>
                    </label>
                    <label htmlFor="400" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">200$ - 400$</span>
                    </label>
                    <label htmlFor="infinte" className="inline-flex items-center mt-3">
                        <input type="radio" name='price' className="form-radio h-4 w-4 text-yellow-600" /><span className="ml-2 text-gray-700">Over 400$</span>
                    </label>
                </div>
            </form>
            <hr className="my-4" />
        </>
    )
}
