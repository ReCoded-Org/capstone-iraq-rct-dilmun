import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'

it('Footer renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        {' '}
        <SearchForm />{' '}
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
