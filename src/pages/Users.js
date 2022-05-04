import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { v4 as uuidv4 } from 'uuid';
import EditUserForm from '../components/EditUserForm';

const Users = () => {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'Siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'Benisphere' }
    ]

    //state
    const [users, setUsers] = useState(usersData)

    //Eliminar Usuarios
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id != id))
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
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))

    }

    return (
        <div className='containter'>
            <h1 style={{ textAlign: 'center' }} >Users</h1>
            {/*<UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>*/}
            {editing?<EditUserForm currentUser={currentUser} updateUser={updateUser}/>:<UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>}
        </div>
    )
}

export default Users