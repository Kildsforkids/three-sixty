import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateCamera from '../components/modals/CreateCamera'
import CreateActionType from '../components/modals/CreateActionType'
import CreateClassroom from '../components/modals/CreateClassroom'

const Settings = () => {
    const [actionTypeVisible, setActionTypeVisible] = useState(false)
    const [classroomVisible, setClassroomVisible] = useState(false)
    const [cameraVisible, setCameraVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setCameraVisible(true)}>
                Добавить камеру
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setClassroomVisible(true)}>
                Добавить аудиторию
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-4 p-2"
                onClick={() => setActionTypeVisible(true)}>
                Добавить тип события
            </Button>
            <CreateCamera show={cameraVisible} onHide={() => setCameraVisible(false)} />
            <CreateClassroom show={classroomVisible} onHide={() => setClassroomVisible(false)} />
            <CreateActionType show={actionTypeVisible} onHide={() => setActionTypeVisible(false)} />
        </Container>
    )
}

export default Settings