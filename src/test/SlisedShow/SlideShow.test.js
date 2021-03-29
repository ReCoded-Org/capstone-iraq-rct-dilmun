import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { SlideShow } from '../../components/ItemDetail'

it('test: SlideShow without any props', () => {
  const tree = renderer
    .create(
      <Router>
        <SlideShow />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
