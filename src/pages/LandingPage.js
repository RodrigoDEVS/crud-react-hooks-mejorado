import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{textAlign: 'center'}} className='containter'>
      <h1 >Bienvenido</h1>
      <p>Por Favor, Elija una Opción:</p>
      <Button variant="primary"><Link to={'register'} style={{textDecoration: 'none', color: 'white'}}>Registro Nuevo</Link></Button>{' '}
      
      <Button variant="primary" href='/users'>Mostrar Usuarios</Button>
    </div>
  )
}

export default LandingPage