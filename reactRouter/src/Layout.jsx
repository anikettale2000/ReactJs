import React from 'react'
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>    // will remains same and consider as Parent
        <Outlet/>    // things will change inside child route
        <Footer/>    // will remains same and consider as Parent
    </>
  )
}

export default Layout