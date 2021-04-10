import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import AddItemBtn from '../../components/AddItemBtn'
import store from '../../redux/store'

it('Test: Add Item Button ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <AddItemBtn />
        </Router>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
