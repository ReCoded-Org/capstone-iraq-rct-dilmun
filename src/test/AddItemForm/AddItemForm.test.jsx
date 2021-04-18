import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../../redux/store'
import AddItemForm from '../../components/AddItemForm'

it('Test: Add Item  ', () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <AddItemForm />
          </Router>
        </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
