import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css'
import { ModalProvider } from 'react-simple-hook-modal'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './containers/Profile'
import Home from './containers/Home'
import About from './containers/About/About'
import Contact from './containers/Contact'
import ProductDetails from './containers/ProductDetails/ProductDetails'
import SearchResult from './containers/SearchResult/SearchResult'
import Settings from './containers/Settings/SettingsModal'

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
import { FetchProducts } from './redux'
import Login from './containers/LogIn'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    return null
  }, [pathname])
  const dispatch = useDispatch()

  dispatch(FetchProducts())
  return (
    <>
      <ModalProvider>
        <Login />
        <Settings />
        <NavBar />
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <Route path={PROFILE_ROUTE} component={Profile} />
          <Route path={ABOUT_ROUTE} component={About} />
          <Route path={CONTACT_ROUTE} component={Contact} />
          <Route path={PRODUCT_DETAILS_ROUTE} component={ProductDetails} />
          <Route path={SEARCH_RESULT_ROUTE} component={SearchResult} />
          <Route path={ADD_ITEM_ROUTE} component={AddItem} />
        </Switch>
        <Footer />
      </ModalProvider>
    </>
  )
}

export default App
