import React from 'react'



const UserTable = props => (
    <span className="border border-primary">
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Codigo</th>
        <th>Conductor</th>
        <th>Grupo</th>
         <th>Mensaje</th>
             <th>opciones</th>
      </tr>
    </thead>
    
    <tbody>
      {props.users.length > 0 ? (

        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{UserTable.SelectConductor}</td>
            <td>{user.select}</td>
            <td>{user.mensaje}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
               borrar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Vacio!!!</td>
        </tr>
      )}
    </tbody>
  </table>
  </span>
)

export default UserTable