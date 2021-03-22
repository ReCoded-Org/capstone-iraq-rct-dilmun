import React from 'react'
import './App.css'
import SearchPageCard from './components/SearchPageCard/SearchPageCard'
import Home from './containers/Home/Home'

function App() {
    return (
        <div className="App">
            <Home />
            <SearchPageCard />
        </div>
    )
}

export default App
