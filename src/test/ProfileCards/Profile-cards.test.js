import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store'
import ProfileCards, { Header } from '../../components/ProfileContentCard'

it('Test: Profile Cards', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <Header />
          <ProfileCards />
        </Provider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
