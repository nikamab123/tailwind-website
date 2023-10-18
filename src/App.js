import React from 'react'
import Home from './pages/Home'
// import Details from './pages/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home/>} /> 
          {/* <Route path="/details" element={<Details />} />  */}
        </Routes>
      </div>
    </Router>
  )
}
