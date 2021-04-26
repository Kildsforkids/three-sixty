import { observer } from 'mobx-react-lite'
import React, { useContext, useState, useEffect } from 'react'
import {Modal, Button, Form, Dropdown} from 'react-bootstrap'
import { createCamera, fetchCameras, fetchClassrooms } from '../../http/cameraAPI'
import { createLog } from '../../http/logAPI'
import { createStream } from '../../http/streamAPI'
import { Context } from '../../index'

const CreateStream = observer(({show, onHide}) => {
    const {camera, user} = useContext(Context)
    const [name, setName] = useState('')

    useEffect(() => {
        fetchCameras().then(data => camera.setCameras(data))
    }, [])

    const addStream = () => {
        createStream({
            name: name,
            cameraId: camera.selectedCamera.id,
            time_start: Date.now(),
            time_end: Date.now(),
            link: 'https://www.youtube.com'
        }).then(data => {
            onHide()
            createLog({userId: user.user.id, actionType: 3, description: `Stream: ${data.name}`})
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
                    Запланировать трансляцию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={'Введите название трансляции'}
                    />
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>{camera.selectedCamera.id ? `Camera ${camera.selectedCamera.id}` : 'Выберите камеру'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {camera.cameras.map(item =>
                                <Dropdown.Item
                                    onClick={() => camera.setSelectedCamera(item)}
                                    key={item.id}>
                                    {`Camera ${item.id}`}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addStream}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateStream