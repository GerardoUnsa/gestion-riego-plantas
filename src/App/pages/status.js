import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './components/header'
import Navbar from './components/navbar'
import Content from './views/statustab'
import './views/statustab.css'

export default function Status() {
  return (
    <div className="">
      <Header/>
      <Navbar interfaz={1}/>
      <Content />
    </div>
  )
}
