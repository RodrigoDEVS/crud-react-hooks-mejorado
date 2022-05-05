import React, { useState, useEffect } from 'react'
import UserTable from '../components/UserTable'
import { v4 as uuidv4 } from 'uuid';
import EditUserForm from '../components/EditUserForm';
import AddUserForm from '../components/AddUserForm';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = () => {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'Siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'Benisphere' }
    ]

    //state
    const [users, setUsers] = useState([])

    //Agregar Usuarios

    const [create, setCreate] = useState(false)

    const addUser = (user) => {
        user.id = uuidv4()
        setCreate(false)
        let userFinal = ([...users, user])
        setUsers(userFinal)
        localStorage.setItem('users', JSON.stringify(userFinal))
    }

    //Eliminar Usuarios
    const deleteUser = (id) => {
        let userFinal = users.filter(user => user.id !== id)
        setUsers(userFinal)
        localStorage.setItem('users', JSON.stringify(userFinal))
    }

    //Editar Usuario
    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState({
        id: null, name: '', username: ''
    })

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        let userFinal = users.map(user => (user.id === id ? updatedUser : user))
        setUsers(userFinal)
        localStorage.setItem('users', JSON.stringify(userFinal))
    }

    //Cargar elementos del local storage para imprimirlos en la tabla al inicio de la aplicación
    useEffect(() => {
      let local = localStorage.getItem('users');
      let base = [{ id: uuidv4(), name: 'Ben', username: 'Benisphere' }]
      if(local != null){
          setUsers(JSON.parse(local))
      }else{
          setUsers(base)
          localStorage.setItem('users', JSON.stringify(base))
      }    
      
    }, [])
    
    return (
        <div className='containter'>
            
            <h1 style={{ textAlign: 'center' }} >Users</h1>
            <Button variant="success" onClick={()=>{setCreate(true)}}>Agregar Nuevo Usuario</Button>
            {create ? <AddUserForm setCreate={setCreate} addUser={addUser} users={users}/> : ''}
            {editing ? <EditUserForm currentUser={currentUser} updateUser={updateUser} /> : <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />}
            <Button variant="secondary"><Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>Salir</Link></Button>
            
        </div>
    )
}

export default Users