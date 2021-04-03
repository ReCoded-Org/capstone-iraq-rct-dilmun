import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import LandingPageCard from '../../components/LandingPageCard'

it('Test: Landing Page Card Passed', () => {
  const tree = renderer
    .create(
      <Router>
        {' '}
        <LandingPageCard />{' '}
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
