import React from 'react'
import { Route,Routes } from 'react-router'
import App from '../App'

const Routing = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={App}></Route>
    </Routes>
   </>
  )
}

export default Routing