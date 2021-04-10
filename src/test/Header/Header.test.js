import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Header from '../../components/Header'

it('TEST: HOME-HEADER component', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
