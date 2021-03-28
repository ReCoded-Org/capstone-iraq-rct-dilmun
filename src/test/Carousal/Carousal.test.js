import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ItemsCarousal from '../../components/ItemsCarousal'

it('Test: Contact info Card without Any props', () => {
    const tree = renderer
        .create(
            <Router>
                <ItemsCarousal />
            </Router>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
