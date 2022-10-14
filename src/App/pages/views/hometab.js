import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth, googleProvider} from '../../../firebase'

export default function Hometab() {
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/flowerpot')
  }

  const handleGoogleLogin = (e) => {
	auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res.credential.idToken)
	    navigate('/flowerpot')
        }).catch((error) => {
            console.error("Error" + error)
        })
    }

  return (
    <main className="form-signin w-100 m-auto text-center">
      <form onSubmit={handleSubmit}>
          <img className="mb-4" src="/assets/logo.png" alt="" width="177" height="177"/>
          <h1 className="h3 mb-5 fw-normal">Loggin</h1>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-secondary" type="submit">Ingresar</button>
      </form>
      <button 
	className="btn btn-outline-light mt-5 w-100" 
	type="submit"
	onClick={handleGoogleLogin}>
	<i className={`me-5 bi bi-google`}></i> Google Login
      </button>
    </main>
  )
}
