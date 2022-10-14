import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './components/header'
import Navbar from './components/navbar'
import Content from './views/usertab'
import './views/usertab.css'

export default function User() {
  return (
    <div className="" >
      <Header/>
      <Navbar interfaz={3}/>
      <Content />
    </div>
  )
}
