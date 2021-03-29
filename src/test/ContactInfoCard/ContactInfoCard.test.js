import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ContactInfoCard from '../../components/ContactInfoCard'
import img from '../../assets/1571937503463.jpeg'

it('Test: Contact info Card without Any props', () => {
  const tree = renderer
    .create(
      <Router>
        <ContactInfoCard />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('Test: Contact info Card with props', () => {
  const tree = renderer
    .create(
      <Router>
        <ContactInfoCard
          profileImg={img}
          name="name here"
          phone="+9647755656"
          location="Location"
          views={10}
          publishDate="22/22/2222"
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
