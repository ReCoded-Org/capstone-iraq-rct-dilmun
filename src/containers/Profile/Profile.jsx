import React from 'react'
import './Profile.css'
import TopProfile from '../../components/TopProfile'
import Card, { Header } from '../../components/ProfileContentCard'

export default function Profile() {
  return (
    <div className="mb-8">
      <TopProfile />
      <Header />
      <Card
        title="BMW"
        content="Amazing car for drif and racing."
        seen={900}
        time="2021-2-28"
      />

      <Card
        title="HOUSE"
        content="this house is for sell.  this house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sellthis house is for sell"
        seen={500}
        time="2021-2-28"
      />
    </div>
  )
}
