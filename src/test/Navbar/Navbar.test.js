import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store'
import NavBar from '../../components/Navbar'

it('Test: Navbar Test: ', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
