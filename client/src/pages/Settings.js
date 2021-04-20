import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Settings = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={'outline-dark'}>Добавить камеру</Button>
            <Button variant={'outline-dark'}>Добавить аудиторию</Button>
            <Button variant={'outline-dark'}>Добавить тип события</Button>
        </Container>
    )
}

export default Settings