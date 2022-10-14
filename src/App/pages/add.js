import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './components/header'
import Navbar from './components/navbar'
import Content from './views/addtab'
import './views/addtab.css'

export default function Add() {
  return (
    <div className="" >
      <Header/>
      <Navbar interfaz={2}/>
      <Content />
    </div>
  )
}
