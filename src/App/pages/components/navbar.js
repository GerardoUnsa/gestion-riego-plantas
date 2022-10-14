import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function Navbar(props) {
  const {interfaz} = props
  const [flower, setFlower] = useState("")
  const [add, setAdd] = useState("")
  const [user, setUser] = useState("")
  
  useEffect(() => {
    const doHighlight = () => {
      if (interfaz == 1) {
	setFlower("icon-highlighted")
      } else if (interfaz == 2) {
	setAdd("icon-highlighted")
      } else
	setUser("icon-highlighted")
    }
    doHighlight()
  });

  return (
  <nav className="navbar navbar-light bg-light navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
    <ul className="navbar-nav nav-justified w-100">

      <li className="nav-item">
        <Link to="/flowerpot" className="nav-link">
	  <i className={`${flower} btn btn-secondary bi bi-basket3-fill`}></i>
	</Link>
      </li>

      <li className="nav-item">
        <Link to="/add" className="nav-link">
	  <i className={`${add} btn btn-secondary bi bi-plus-square-fill`}></i>
	</Link>
      </li>

      <li className="nav-item">
        <Link to="/user" className="nav-link">
	  <i className={`${user} btn btn-secondary bi bi-person-fill`}></i>
	</Link>
      </li>

    </ul>
  </nav>
      )
}
