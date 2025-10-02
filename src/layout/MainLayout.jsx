import React from 'react'

import AppRouter from '../route/AppRouter'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Slidebar from '../components/Slidebar'

export default function MainLayout() {
  return (
    <div>
      <Nav/>
      <Slidebar/>
      <AppRouter/>
      <Footer/>
    </div>
  )
}
