import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Nvigation from './components/Navbar/Navbra'
import Profile from './containers/profile/Profile'

function App() {
    return (
        // eslint-disable-next-line react/jsx-fragments
        <Fragment>
            <Nvigation />
            <Switch>
                <Route path="/profile" component={Profile} />
            </Switch>
        </Fragment>
    )
}

export default App
