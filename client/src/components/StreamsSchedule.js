import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import {Col, Container, Row, Table, Badge} from 'react-bootstrap'

const StreamsSchedule = observer(() => {
    const {schedule} = useContext(Context)
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
                        <tr>
                            <td>01.06.2021 15:00</td>
                            <td>1632</td>
                            <td>Тестовая трансляция</td>
                            <td>https://youtube.com</td>
                            <td>Ожидает начала</td>
                        </tr>
                        <tr>
                            <td>02.06.2021 15:00</td>
                            <td>1632</td>
                            <td>Тестовая трансляция</td>
                            <td>https://youtube.com</td>
                            <td>Ожидает начала</td>
                        </tr>
                        <tr>
                            <td>03.06.2021 15:00</td>
                            <td>1523</td>
                            <td>Тестовая трансляция</td>
                            <td>https://youtube.com</td>
                            <td>Ожидает начала</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
})

export default StreamsSchedule