import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { SecondaryNavbar } from '../../components/Navbar'

it('Secondary Navbar ', () => {
    const tree = renderer
        .create(
            <Router>
                <SecondaryNavbar />
            </Router>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
