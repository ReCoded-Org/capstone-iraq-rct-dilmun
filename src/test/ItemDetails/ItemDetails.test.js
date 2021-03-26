import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'

it('Test: Item details without any props', () => {
    const tree = renderer
        .create(
            <Router>
                <ItemDetail />
            </Router>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('Test: Item details with props', () => {
    const tree = renderer
        .create(
            <Router>
                <ItemDetail price={10} title="hey" description="hello" />
            </Router>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
