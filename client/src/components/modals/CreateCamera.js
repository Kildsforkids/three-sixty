import React, { useContext } from 'react'
import {Modal, Button, Form, Dropdown} from 'react-bootstrap'
import { Context } from '../../index'

const CreateCamera = ({show, onHide}) => {
    const {camera} = useContext(Context)

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
                        placeholder={'Введите IP-адрес камеры'}
                    />
                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>Выберите аудиторию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {camera.classrooms.map(classroom =>
                                <Dropdown.Item key={classroom.id}>{classroom.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateCamera