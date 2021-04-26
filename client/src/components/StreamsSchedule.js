import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import {Col, Container, Row, Table, Badge} from 'react-bootstrap'
import { fetchStreams } from '../http/streamAPI'
import { getDate } from '../utils/consts'

const StreamsSchedule = observer(() => {
    const {streamStore} = useContext(Context)

    useEffect(() => {
        fetchStreams().then(data => streamStore.setStreams(data))
    }, [])

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
            <Row>
                <Table striped bordered hover>
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
                        {streamStore.streams.map(stream =>
                            <tr key={stream.id}>
                                <td>{getDate(stream.time_start)}</td>
                                <td>1632</td>
                                <td>{stream.name}</td>
                                <td>{stream.link}</td>
                                <td>Ожидает начала</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
})

export default StreamsSchedule