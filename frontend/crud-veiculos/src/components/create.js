import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    let navigate = useNavigate();
    const[locadora, setLocadora] = useState('')
    const[modelo, setModelo] = useState('')
    const[marca, setMarca] = useState(0)
    const[motor, setMotor] = useState('')
    const[portas, setPortas] = useState(0)
    const[cambio, setCambio] = useState('')
    const[ar, setAr] = useState(false)
    console.log(ar)
    const postData = () => {
        axios.post(`http://localhost:3030/veiculos`, {
            locadora,
            modelo,
            marca,
            motor,
            portas,
            cambio,
            ar
        }).then(() => {
            navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Locadora</label>
                    <input placeholder='Locadora' onChange={(e) => setLocadora(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder='Modelo' onChange={(e) => setModelo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Marca</label>
                    <input placeholder='Marca' onChange={(e) => setMarca(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Motor</label>
                    <input placeholder='Motor' onChange={(e) => setMotor(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Portas</label>
                    <input placeholder='Portas' onChange={(e) => setPortas(e.target.portas)}/>
                </Form.Field>
                <Form.Field>
                    <label>Cambio</label>
                    <input placeholder='Cambio' onChange={(e) => setCambio(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Ar condicionado' onChange={(e) => setAr(!ar)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Enviar</Button>
            </Form>
        </div>
    )
}