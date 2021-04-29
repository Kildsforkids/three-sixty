import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import { Context } from '..'
import plug from '../assets/plug.png'

const CameraDetails = ({selectedCamera}) => {
    const {camera} = useContext(Context)
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    {/* <Row className="justify-content-center"> */}
                        <Tabs defaultActiveKey="preview" className="d-flex justify-content-end">
                            <Tab eventKey="preview" title="Превью"
                            onMouseOver={() => setShowTooltip(true)}
                            onMouseOut={() => setShowTooltip(false)}>
                                <div className="d-flex flex-column align-items-center">
                                    <video
                                        width="480"
                                        poster={plug}>

                                    </video>
                                    <div>
                                        <Button variant="success" hidden={!showTooltip}>Старт</Button>
                                        <Button variant="danger" hidden={!showTooltip}>Стоп</Button>
                                    </div>
                                </div>
                                {/* <div className="d-flex justify-content-end">
                                    <Button hidden={!showTooltip}>Кнопка</Button>
                                </div> */}
                            </Tab>
                            <Tab eventKey="youtube" title="YouTube">
                                <div className="d-flex justify-content-center">
                                    <iframe
                                        title={`Camera ${selectedCamera.id}`}
                                        src="https://www.youtube.com/embed/cNtE-80Y1EY"
                                        width="480"
                                        height="271">
                                        Ваш браузер не поддерживает фреймы
                                    </iframe>
                                </div>
                            </Tab>
                        </Tabs>
                    {/* </Row> */}
                </Col>
                <Col md={4}>
                    <Row>
                        <h4>{`Camera ${selectedCamera.id}`}</h4>
                    </Row>
                    <Row className="d-flex flex-column">
                        <p>{`IP: ${selectedCamera.ip}`}</p>
                        <p>{`Аудитория: ${camera.classrooms.find(i => i.id === selectedCamera.classroomId).name}`}</p>
                        <p>Статус: неактивна</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CameraDetails