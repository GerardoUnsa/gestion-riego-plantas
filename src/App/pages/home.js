import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Content from './views/hometab'
import './views/hometab.css'

export default function Home() {
  return (
    <div className="homeBody" >
      <Content />
    </div>
  )
}
