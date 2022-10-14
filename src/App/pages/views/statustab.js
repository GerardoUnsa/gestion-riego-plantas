import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { db, auth } from '../../../firebase'

export default function Statustab() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [planta, setPlanta] = useState({})
  const [irrigaciones, setIrrigacion] = useState([])
  const params = useParams()

  useEffect(() => {
    const user = auth.currentUser
    setUser(user)

    const getData = () => {
      db.collection('plants').doc(user.email).collection('plants').doc(params.plantID).onSnapshot((query) => {
	//console.log(query.data())
	setPlanta(query.data())
      })

      db.collection('plants').doc(user.email).collection('plants').doc(params.plantID).collection('irrigations').onSnapshot((query) => {
	const irrigations = []
	query.forEach(element => {
	  irrigations.push({ ...element.data(), id: element.id })
	})
	//console.log(irrigations)
	setIrrigacion(irrigations)
      })
    }

    getData()
  }, [user])

  const handleIrrigate = async (e) => {
    e.preventDefault()
    const date = new Date()
    const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
    const jsonValues = {
      fecha: dias[date.getDay()]+" "+date.getHours()+":"+date.getMinutes(),
    }

    await db.collection('plants').doc(user.email).collection('plants').doc(params.plantID).collection('irrigations').doc().set(jsonValues)
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    await db.collection('plants').doc(user.email).collection('plants').doc(params.plantID).collection('irrigations').get().then((querySnapshot) => {
      Promise.all(querySnapshot.docs.map((d) => d.ref.delete()))
    })

    const anotherDelete = async () => {
      await db.collection('plants').doc(user.email).collection('plants').doc(params.plantID).delete()
    }
    anotherDelete()
    navigate('/flowerpot')
  }

  return (
    <div className="statusBody">

      <div className="card mb-3">
	<h3 className="card-header">{planta.type}</h3>

        <div className="card-body text-center">
	  <img className="mb-3" src={`${planta.image}`} alt="" width="177" height="177"/>
	  <p className="card-text">
	    {planta.description}
	  </p>

	  <div className="card-body bg-info text-white ">
	    <h6 className="card-subtitle text-muted mb-3">Irrigaciones: {irrigaciones.length}</h6>
	    {irrigaciones.map((value, index) => (
	      <li key={value.id} className="list-group-item">{value.fecha}</li>
	    ))}
	  </div>
	</div>
      
	<div className="card-footer text-muted">
	  Fecha de registro: {planta.dateCreation}
	</div>


	<div className="btn-group" role="group" aria-label="Basic example">
	  <button 
	    onClick={handleIrrigate}
	    type="button" 
	    className="btn btn-outline-info btn-sm">
	    Regar
	  </button>

	  <button 
	    onClick={handleDelete}
	    type="button" 
	    className="btn btn-outline-danger btn-sm">
	      Eliminar Planta
	  </button>
        </div>
      </div>

    </div>
  )
}

