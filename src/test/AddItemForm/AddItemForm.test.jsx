import React from 'react'
import { ToastProvider } from 'react-toast-notifications'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from '../../redux/store'
import AddItemForm from '../../components/AddItemForm'

it('Test: Add Item  ', () => {
  const tree = renderer
    .create(
      <ToastProvider autoDismiss autoDismissTimeout="5000">
        <Provider store={store}>
          <Router>
            <AddItemForm />
          </Router>
        </Provider>
      </ToastProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
