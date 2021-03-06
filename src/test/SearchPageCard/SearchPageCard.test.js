import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchPageCard from '../../components/SearchPageCard'

it('Test: Search Page Card Passed', () => {
  const tree = renderer
    .create(
      <Router>
        {' '}
        <SearchPageCard />{' '}
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
