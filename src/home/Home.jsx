import React from 'react'
import "./Home.scss"
import { Header } from '../components/header/Header'
import { Hero } from './Hero'
import { CardButtons } from '../components/cards/CardButtons'
import { FooterMultiColumn } from '../components/footer/FooterMultiColumn'

export const Home = () => {
  return (
   <div className='Home__layout'>
    <Header/>
    <Hero/>
    <CardButtons/>
    <FooterMultiColumn/>
   </div> 
  )
}
