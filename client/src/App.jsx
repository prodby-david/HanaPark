import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './pages/hero'
import Login from './pages/user/login'


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
