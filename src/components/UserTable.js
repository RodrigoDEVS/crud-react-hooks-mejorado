import React from 'react'
import { Table, Button } from 'react-bootstrap'

const UserTable = (props) => {
    
    return (
        <div className='mt-3'>
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
                    {props.users.map((element, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.name}</td>
                            <td>{element.username}</td>
                            <td>
                                <Button variant="primary" onClick={()=>{props.editRow(element)}}>Editar</Button>{' '}
                                <Button variant="danger" onClick={()=>{props.deleteUser(element.id)}}>Eliminar</Button>{' '}
                            </td>
                        </tr>
                    ))}
                        
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable