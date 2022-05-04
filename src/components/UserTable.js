import React from 'react'
import { Table, Button } from 'react-bootstrap'

const UserTable = (props) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <Button variant="primary" onClick={()=>{props.editRow(user)}}>Editar</Button>{' '}
                                <Button variant="danger" onClick={()=>{props.deleteUser(user.id)}}>Eliminar</Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable