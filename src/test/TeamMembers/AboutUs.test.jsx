import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import {AboutUs} from '../../components/TeamMembers';

it('Test: TeamMembers  passed', () => {
  const tree = renderer
    .create(
      <Router>
        <AboutUs />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
