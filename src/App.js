import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Profile from './containers/Profile/Profile'
import Home from './containers/Home'
import About from './containers/About/About'
import Contact from './containers/Contact'
import ProductDetails from './containers/ProductDetails/ProductDetails'
import SearchResult from './containers/SearchResult/SearchResult'
import AddItem from './containers/AddItem/AddItem'
import {
    HOME_ROUTE,
    CONTACT_ROUTE,
    ABOUT_ROUTE,
    PRODUCT_DETAILS_ROUTE,
    SEARCH_RESULT_ROUTE,
    PROFILE_ROUTE,
    ADD_ITEM_ROUTE,
} from './router'

function App() {
    return (
        // eslint-disable-next-line react/jsx-fragments
        <Fragment>
            <NavBar />
            <Switch>
                <Route exact path={HOME_ROUTE} component={Home} />
                <Route path={PROFILE_ROUTE} component={Profile} />
                <Route path={ABOUT_ROUTE} component={About} />
                <Route path={CONTACT_ROUTE} component={Contact} />
                <Route
                    path={PRODUCT_DETAILS_ROUTE}
                    component={ProductDetails}
                />
                <Route path={SEARCH_RESULT_ROUTE} component={SearchResult} />
                <Route path={ADD_ITEM_ROUTE} component={AddItem} />
            </Switch>
        </Fragment>
    )
}

export default App
