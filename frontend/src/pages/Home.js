import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Products from './Products'
import SingleProduct from './SingleProduct'
import Login from './Login'
import Register from './Register'
import ErrorPage from './ErrorPage'
import Cart from './Cart'


const Home = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Main />} /> 
              <Route path='/products' element={<Products />} /> 
              <Route path='/products/:id' element={<SingleProduct />} /> 
              <Route path='/login' element={<Login />} /> 
              <Route path='/register' element={<Register />} /> 
              <Route path='/cart' element={<Cart />} /> 
              <Route path='*' element={<ErrorPage />} /> 
          </Routes>
      </Router>
    </>
  )
}

export default Home