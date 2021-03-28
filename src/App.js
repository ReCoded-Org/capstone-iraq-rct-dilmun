import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './containers/Profile'
import Home from './containers/Home'
import About from './containers/About/About'
import Contact from './containers/Contact'
import ProductDetails from './containers/ProductDetails/ProductDetails'
import SearchResult from './containers/SearchResult/SearchResult'
import AddItem from './containers/AddItem/AddItem'
import './fontawsome'
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
        <>
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
            <Footer />
        </>
    )
}

export default App
