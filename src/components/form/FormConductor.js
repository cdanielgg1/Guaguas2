import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm'
import UserTable from '../tables/UserTable'

const App = () => {
		// Data
		const usersData = [
			{ id: 1, name: 'Carlos', username: 'garcia',SelectConductor: '127', select:'1', mensaje: 'hola que tal' },
			{ id: 2, name: 'Craig', username: 'siliconeidolon',SelectConductor: '131', select:'1',  mensaje: 'bienvenido' },
			{ id: 2, name: 'Craig', username: 'siliconeidolon',SelectConductor: '137', select:'',  mensaje: 'bienvenido' },
		]
	
		const initialFormState = { id: null, name: '', username: '',SelectConductor:'', select: '', mensaje: '' }
	
		// Setting state
		const [ users, setUsers ] = useState(usersData)
		const [ currentUser, setCurrentUser ] = useState(initialFormState)
		const [ editing, setEditing ] = useState(false)
	
		// CRUD operations
		const addUser = user => {
			user.id = users.length + 1
			console.log(user)
			setUsers([ ...users, user ])
		}
	
		const deleteUser = id => {
			setEditing(false)
	
			setUsers(users.filter(user => user.id !== id))
		}
	
		const updateUser = (id, updatedUser) => {
			setEditing(false)
	
			setUsers(users.map(user => (user.id === id ? updatedUser : user)))
		}
	
		const editRow = user => {
			setEditing(true)
	
			setCurrentUser({ id: user.id, name: user.name, username: user.username, SelectConductor: user.SelectConductor, select:user.select, mensaje: user.username })
		}
	
		return (
			<div className="form">
				<h1>App envio de SMS</h1>
				<div className="flex-row">
					<div className="flex-large">
						{editing ? (
							<Fragment>
								<h2>Editar envio</h2>
								<EditUserForm
									editing={editing}
									setEditing={setEditing}
									currentUser={currentUser}
									updateUser={updateUser}
								/>
							</Fragment>
						) : (
							<Fragment>
								<h2>Agregar envio</h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						)}
					</div>
					<div className="flex-large">
						<h2>Ver mensajes</h2>
						<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
					</div>
				</div>
			</div>
		)
	}
	
	export default App