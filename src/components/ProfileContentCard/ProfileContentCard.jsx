import React from 'react'
import './ProfileContentCard.css'
import PropTypes from 'prop-types'

export default function ProfileContentCard({ title }) {
    return <div>{title}</div>
}

ProfileContentCard.defaultProps = {
    title: 'Eslint sucks',
}

ProfileContentCard.propTypes = {
    title: PropTypes.string,
}
