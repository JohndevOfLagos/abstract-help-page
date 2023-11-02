import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../page/home/Home'
import { Login } from '../page/Login/Login'


export const Approutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}
