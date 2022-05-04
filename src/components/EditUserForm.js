import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    console.log(props)
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({defaultValues: props.currentUser});

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
        <div>
            <h1>Editar Usuario</h1>
            
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

                <Button variant="primary" type="submit">Editar Usuario</Button>
            </Form>
            
        </div>
    )
}

export default EditUserForm