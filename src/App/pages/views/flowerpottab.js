import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { db, auth } from '../../../firebase'

export default function Flowerpottab() {
  const [flowertPots, setFlowerpots] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    const user = auth.currentUser
    setUser(user)

    const getData = () => {
      db.collection('plants').doc(user.email).collection('plants').onSnapshot((query) => {
	const plants = []
	query.forEach(element => {
	  plants.push({ ...element.data(), id: element.id })
	})
	//console.log(plants)
	setFlowerpots(plants)
      })
    }

    getData()
    }, [user])

  return (
    <div className="flowerpotBody list-group w-auto">
      {flowertPots.map((value, index) => (

	<Link key={value.id} to={`/status/${value.id}`} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
	  <img src={`${value.image}`} alt="twbs" width={62} height={62} className="rounded-circle flex-shrink-0" />
	  <div className="d-flex gap-2 w-100 justify-content-between">
	    <div>
	      <h6 className="mb-0">{value.type}</h6>
              <p className="mb-0 opacity-75">{value.description}</p>
            </div>
            <small className="opacity-50 text-nowrap"> {value.dateCreation} </small>
          </div>
        </Link>
      ))}

    </div>
  )
}
