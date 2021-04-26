import React, { useContext, useState } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { Context } from '../..'
import { createClassroom } from '../../http/cameraAPI'
import { createLog } from '../../http/logAPI'

const CreateClassroom = ({show, onHide}) => {
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(0)

    const addClassroom = () => {
        createClassroom({name, capacity}).then(data => {
            setName('')
            setCapacity(0)
            onHide()
            createLog({userId: user.user.id, actionType: 2, description: `${data.name}, ${data.capacity}`})
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить аудиторию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={'Введите название (номер) аудитории'}
                    />
                    <Form.Control
                        className="mt-3"
                        value={capacity}
                        onChange={e => setCapacity(e.target.value)}
                        placeholder={'Введите вместимость'}
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addClassroom}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateClassroom