import React from 'react'
import { Outlet } from 'react-router'
import Header from './component/Header/Header'
import UserProfile from './component/UserProfile/UserProfile'

function Layout() {
  return (
    <div>
      {/* <Header/> */}
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
