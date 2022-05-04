import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data, e) => {
        console.log(data)
        props.addUser(data)
        e.target.reset()
        navigate('/')
    }

    return (
        <div>
            <h1>Formulario</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputText">Nombre</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Ingrese el Nombre" {...register("name", { required: true })}/>
                    <p className='text-danger text-small d-block mb-2' >{errors.name && 'Campo Requerido'}</p>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="inputText">Nombre de Usuario</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Agregue un Nick Name" {...register("username", { required: true })} />
                        <p className='text-danger text-small d-block mb-2' >{errors.username && 'Campo Requerido'}</p>
                </Form.Group>

                <Button variant="primary" type="submit" href='/'>Agregar</Button>
            </Form>
        </div>
    )
}

export default AddUserForm