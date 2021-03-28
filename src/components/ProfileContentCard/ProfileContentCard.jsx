import React from 'react'
import './ProfileContentCard.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

export default function ProfileContentCard({ title, content, seen, time }) {
    function timing(date) {
        const now = moment()
        const then = moment(date)
        const seconds = now.diff(then, 'seconds')
                 const week = `${parseInt(seconds / 604800, 10)}W `
        const day = `${parseInt((seconds % 604800) / 86400, 10)}D `
        const m = `${parseInt(
            ((seconds % 604800) % 86400) / (60 * 60),
            10
        )}h ago`
        const all = week + day + m
        return all
    }

    return (
        <div id="profile_content" className="mt-28">
            <div id="Profile_My_items">
                <div className="sm:text-xs md:text-lg lg:text-2xl font-bold">
                    My Items
                </div>
                <button
                    type="button"
                    className="text-white sm:text-xs md:text-lg lg:text-xl rounded-full"
                >
                    Add Item +
                </button>
            </div>

            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
            <div
                id="Profile_content_container_data"
                className="rounded-md text-xs p-2 "
            >
                <div
                    id="tailwind_dont_have_spacebetween"
                    className="flex mb-2 "
                >
                    <div className=" text-left font-bold md:text-lg lg:text-xl">
                        {title}
                    </div>
                    <div className=" text-center text-darkBlue md:text-lg">
                        <FontAwesomeIcon icon="eye" />{' '}
                        {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className=" text-right mr-2 md:text-lg lg:text-xl">
                        <button
                            id="delete_button_hover"
                            className="text-white pt-0.5 pl-2 pr-2 bg-red rounded-sm"
                            type="button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="mb-2 md:text-lg lg:text-lg">{content}</div>
                <div className=" text-left text-xs text-darkBlue md:text-md lg:text-lg">
                    <FontAwesomeIcon icon="clock" /> {timing(time)}
                </div>
            </div>
        </div>
    )
}

ProfileContentCard.defaultProps = {
    title: 'Eslint sucks',
    content: 'content',
    seen: 9000,
    time: '2021-2-28',
}

ProfileContentCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    seen: PropTypes.number,
    time: PropTypes.string,
}
