import React from 'react'
import renderer from 'react-test-renderer'
import { ToastProvider } from 'react-toast-notifications'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../../redux/store'
import ProfileCards, { Header } from '../../components/ProfileContentCard'

it('Test: Profile Cards', () => {
  const tree = renderer
    .create(
      <Router>
        <Provider store={store}>
          <ToastProvider autoDismiss autoDismissTimeout="5000">
            <Header />
            <ProfileCards />
          </ToastProvider>
        </Provider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
