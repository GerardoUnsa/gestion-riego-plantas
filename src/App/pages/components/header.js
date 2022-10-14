import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export default function Header(props) {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
	<div className="container-fluid">

          <Link className="navbar-brand collapse navbar-collapse" to="/flowerpot">Flowaterin</Link>

	  <div className="">
	    <Link to="/" className="nav-link">
	      <i className={`bi bi-box-arrow-right`}></i>
	    </Link>
	  </div>

	</div>
      </nav>
    )
}
