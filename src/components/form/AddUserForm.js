import React, { useState } from 'react'
import SelectConductor from '../SelectConductor';


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', SelectConductor: '', select:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	console.log(props)

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			 <h1>Nombre codigo</h1>
			<label>Nombre</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>codigo</label>
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
			<label>Mensaje</label>
			<textarea type="text" row ="10" columns = "50" name="mensaje" value={user.textarea} onChange ={handleInputChange} />
			<button>Agregar</button>
		</form>
	)
}

export default AddUserForm