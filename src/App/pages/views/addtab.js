import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { db, auth } from '../../../firebase'

export default function Addtab() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [tipo, setType] = useState('')
  const [description, setDescription] = useState('')

  const handleType = (e) => {setType(e.target.value)}
  const handleDescription = (e) => {setDescription(e.target.value)}

  useEffect(() => {
    const user = auth.currentUser
    setUser(user)
  }, [user])

  const postFlowerpot = async (e) => { // Publica una maceta/planta invocando a esta funcion
    e.preventDefault()
    const date = new Date().toLocaleDateString()
    //console.log(date)

    const jsonValues = {
      type: tipo,
      irrigations: 0,
      description: description,
      image: "https://cdn.homedepot.com.mx/productos/139267/139267-d.jpg",
      dateCreation: date,
    }

    await db.collection('plants').doc(user.email).collection('plants').doc().set(jsonValues)
    navigate('/flowerpot')
  }

  return (
    <form className="addBody form-group" onSubmit={postFlowerpot}>

	<div className="form-floating mb-3">
	  <input onChange={handleType} type="text" className="form-control" id="floatingInput" placeholder="Tipo de maceta" />
          <label htmlFor="floatingInput">Tipo</label>
      </div>

	<div className="form-floating mb-3">
          <textarea onChange={handleDescription} className="form-control" placeholder="Agrega una descripcion" id="floatingTextarea2" style={{height: '100px'}}/>
	  <label htmlFor="floatingTextarea2">Descripcion</label>
        </div>

	<button className="w-100 btn btn-secondary my-2 my-sm-0" type="submit">Guardar</button>

    </form>
  )
}
