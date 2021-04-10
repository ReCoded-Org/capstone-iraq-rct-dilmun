import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import TeamMembers from '../../components/TeamMembers';

it('Test: TeamMembers  passed', () => {
  const tree = renderer
    .create(
      <Router>
        <TeamMembers />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
