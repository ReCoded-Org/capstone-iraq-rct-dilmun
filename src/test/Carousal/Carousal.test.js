import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store'
import ItemsCarousal from '../../components/ItemsCarousal'

it('Test: Contact info Card without Any props', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <ItemsCarousal />
        </Provider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
