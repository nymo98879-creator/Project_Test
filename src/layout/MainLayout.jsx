import React from 'react'
import Nav from '../components/Nav'
import AppRouter from '../route/AppRouter'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div>
      <Nav/>
      <AppRouter/>
      <Footer/>
    </div>
  )
}
