import React, { useState, useEffect } from 'react'
import SelectConductor from '../SelectConductor'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Usuario</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />

      <SelectConductor
				 name="SelectConductor"
				  value={user.SelectConductor}
				   onChange={handleInputChange}
        />
	
  
			<label>
          Seleccione grupo:
		  <select
		  
			 name= "select"
			  value={user.select} 
			  onChange ={handleInputChange}>
			  
			  <optgroup label="Grupo1">
			
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
			</optgroup>
			<optgroup label="Grupo2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
			</optgroup>

          </select>
        </label>

      <button>Actualizar</button>
      <label>Mensaje</label>
			<textarea type="text" row ="10" columns = "50" name="mensaje" value={user.textarea} onChange ={handleInputChange} />
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditUserForm