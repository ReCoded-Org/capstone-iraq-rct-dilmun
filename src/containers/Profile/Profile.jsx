import React, { Fragment } from 'react'
import './Profile.css'
import TopProfile from '../../components/TopProfile'
import Card from '../../components/ProfileContentCard'

export default function Profile() {
    return (
        <>
            <TopProfile />
            <Card
                title="BMW"
                content="Amazing car for drif and racing."
                seen={900}
                time="2021-2-28"
            />
        </>
    )
}
