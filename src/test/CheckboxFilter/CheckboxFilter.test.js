import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store'
import CheckboxFilter from '../../components/CheckboxFilter'

it('Test: CheckboxFilter Passed the test', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <CheckboxFilter />
        </Provider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
