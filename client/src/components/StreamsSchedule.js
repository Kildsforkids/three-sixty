import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import {Col, Container, Row, Table, Badge, Button} from 'react-bootstrap'
import { fetchStreams } from '../http/streamAPI'
import { getDate } from '../utils/consts'

const StreamsSchedule = observer(() => {
    const {streamStore, camera} = useContext(Context)

    useEffect(() => {
        fetchStreams().then(data => streamStore.setStreams(data))
    }, [])

    const addStream = () => {
        console.log([...streamStore.streams, {}])
        streamStore.setStreams([...streamStore.streams, {id: 0, time_start: "", cameraId: 1, name: "Новое событие", link: "link"}])
    }

    const removeStream = (id) => {
        streamStore.setStreams(streamStore.streams.filter(i => i.id !== id))
    }

    const getClassroom = (cameraId) => {
        const classroomId = camera.cameras.find(i => i.id === cameraId).classroomId
        return camera.classrooms.find(i => i.id === classroomId)
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <h4>Расписание трансляций</h4>
                </Col>
                <Col className="d-flex align-items-center" md={8}>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                    <Badge className="ml-1" style={{cursor: 'pointer'}} variant="dark">Dark</Badge>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    1
                </Col>
                <Col md={2}>
                    2
                </Col>
                <Col md={2}>
                    3
                </Col>
                <Col md={2}>
                    4
                </Col>
                <Col md={4}>
                    5
                </Col>
            </Row>
            <Row className="d-flex flex-row-reverse">
                <Button
                    variant={'outline-primary'}
                    onClick={addStream}>
                    Создать
                </Button>
            </Row>
            <Row className="d-flex justify-content-center">
                {streamStore.streams.length > 0 ?
                    <Table striped bordered hover style={{textAlign: 'center', verticalAlign: 'center'}}>
                        <thead>
                            <tr>
                                <th>Время</th>
                                <th>Аудитория</th>
                                <th>Название</th>
                                <th>Ссылка</th>
                                <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {streamStore.streams.map((stream, index) =>
                                <tr key={index}>
                                    <td>{getDate(stream.time_start)}</td>
                                    <td>{getClassroom(stream.cameraId).name}</td>
                                    <td>{stream.name}</td>
                                    <td><a href={stream.link} target="_blank">{stream.link}</a></td>
                                    <td>Ожидает начала</td>
                                    <td>
                                        <Button
                                            onClick={() => removeStream(stream.id)}
                                            variant={'outline-danger'}>
                                            Удалить
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    :
                    <h5>Нет запланированных событий</h5>
                }
            </Row>
        </Container>
    )
})

export default StreamsSchedule