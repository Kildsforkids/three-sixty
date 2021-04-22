import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const CreateClassroom = ({show, onHide}) => {
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
                        placeholder={'Введите название (номер) аудитории'}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={'Введите вместимость'}
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateClassroom