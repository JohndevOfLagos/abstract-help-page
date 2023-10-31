import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../home/Home'


export const Approutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
