import React, { Fragment } from 'react'
import './Profile.css'
import TopProfile from '../../components/TopProfile'
import Card from '../../components/ProfileContentCard'

export default function Profile() {
    return (
        <>
            <TopProfile />
            <Card />
            <Card />
        </>
    )
}
