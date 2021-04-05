import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import AddItemForm from '../../components/AddItemForm';

it('Test: Add Item Form passed ', () => {
  const tree = renderer
    .create(
      <Router>
        <AddItemForm />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
