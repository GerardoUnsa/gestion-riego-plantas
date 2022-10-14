import React, { useState, useEffect } from 'react'
import {auth} from '../../../firebase'

export default function Usertab() {
  const [user, setUser] = useState({})

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
	setUser(user)
      } else {
	console.log('sigout')
      }
    })
  }, [user])

  return (
    <div className="userBody text-center m-auto">
      <div className="p-3 mb-5 bg-light">
          <img className="mb-3 rounded-circle" src={`${user.photoURL}`} alt="" width="177" height="177"/>
          <h1 className="h3 fw-normal">{user.displayName}</h1>
          <p className="mb-3 opacity-75">{user.email}</p>
      </div>

      <form className="">
	<button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
	  <i className={`me-2 bi bi-person-x-fill`}></i> Eliminar Cuenta
	</button>
      </form>
    </div>

  )
}
