import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import plug from '../assets/plug.png'

const CameraDetails = ({camera}) => {
    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <Row className="justify-content-center">
                        <div className="d-flex justify-content-center">
                            <video width="480" poster={plug}>

                            </video>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <h4>{`Camera ${camera.id}`}</h4>
                    </Row>
                    <Row>
                        {`IP: ${camera.ip}`}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CameraDetails