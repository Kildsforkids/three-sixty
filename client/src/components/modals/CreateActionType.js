import React, { useContext, useEffect, useState } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { Context } from '../..'
import { createActionType, createLog, fetchActionTypes } from '../../http/logAPI'

const CreateActionType = ({show, onHide}) => {
    const {logger, user} = useContext(Context)
    const [value, setValue] = useState('')

    useEffect(() => {
        fetchActionTypes().then(data => logger.setActionTypes(data))
    }, [])

    const addActionType = () => {
        createActionType({name: value}).then(data => {
            setValue('')
            onHide()

            // createLog({userId, actionId, description})
        })
    }

    console.log(user)

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить камеру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Введите название типа'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addActionType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateActionType