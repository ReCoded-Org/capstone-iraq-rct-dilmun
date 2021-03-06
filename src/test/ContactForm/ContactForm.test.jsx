import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'

it('Test: Contact Form passed', () => {
  const tree = renderer
    .create(
      <Router>
        <ContactForm />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
