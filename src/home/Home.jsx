import React from 'react'
import { Header } from '../components/header/Header'
import { Hero } from './Hero'
import { CardButtons } from '../components/cards/CardButtons'
import { FooterMultiColumn } from '../components/footer/FooterMultiColumn'

export const Home = () => {
  return (
   <>
    <Header/>
    <Hero/>
    <CardButtons/>
    <FooterMultiColumn/>
   </> 
  )
}
