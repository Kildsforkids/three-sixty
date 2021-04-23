import { observer } from 'mobx-react-lite'
import React, { useContext, useState, useEffect } from 'react'
import {Modal, Button, Form, Dropdown} from 'react-bootstrap'
import { createCamera, fetchClassrooms } from '../../http/cameraAPI'
import { Context } from '../../index'

const CreateCamera = observer(({show, onHide}) => {
    const {camera} = useContext(Context)
    const [ip, setIP] = useState('')

    useEffect(() => {
        fetchClassrooms().then(data => camera.setClassrooms(data))
    }, [])

    const addCamera = () => {
        const formData = new FormData()
        formData.append('ip', ip)
        formData.append('classroomId', camera.selectedClassroom.id)
        createCamera(formData).then(data => onHide())
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
                    Добавить камеру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={ip}
                        onChange={e => setIP(e.target.value)}
                        placeholder={'Введите IP-адрес камеры'}
                    />
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{camera.selectedClassroom.name || 'Выберите аудиторию'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {camera.classrooms.map(classroom =>
                                <Dropdown.Item
                                    onClick={() => camera.setSelectedClassroom(classroom)}
                                    key={classroom.id}>
                                    {classroom.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCamera}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateCamera