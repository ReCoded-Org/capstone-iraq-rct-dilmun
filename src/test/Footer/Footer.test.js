import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from '../../components/Footer'

it('Footer renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        {' '}
        <Footer />{' '}
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
