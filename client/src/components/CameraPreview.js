import React from 'react'
import { Card, Col } from 'react-bootstrap'
import plug from '../assets/plug.png'

const CameraPreview = ({camera, setSelectedCamera}) => {
    return (
        <Col md={4}>
            <Card
                className="mt-3 pt-3 justify-content-center"
                style={{width: '18rem', cursor: 'pointer'}}
                border="danger"
                onClick={() => setSelectedCamera(camera)}>
                <div className="d-flex justify-content-center">
                    <video width="240" poster={plug}>

                    </video>
                </div>
                <div>
                    {`Camera ${camera.id}`}
                </div>
            </Card>
        </Col>
    )
}

export default CameraPreview