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
        <ToastProvider autoDismiss autoDismissTimeout="2500">
          <Provider store={store}>
            <Header />
            <ProfileCards />
          </Provider>
        </ToastProvider>
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
