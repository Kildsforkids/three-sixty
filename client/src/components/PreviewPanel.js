import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import CameraDetails from './CameraDetails'
import CameraPreview from './CameraPreview'

const PreviewPanel = observer(() => {
    const {camera} = useContext(Context)
    const [selectedCamera, setSelectedCamera] = useState(null)

    // useEffect(() => {
    //     if (selectedCamera) {
    //         console.log(`Была выбрана камера с ID: ${selectedCamera.id}`)
    //     }
    // }, [selectedCamera])

    return (
        <>
            {selectedCamera ?
                <Row className="mt-3 d-flex justify-content-md-center">
                    <CameraDetails camera={selectedCamera} />
                    <Row className="mt-3 d-flex justify-content-md-center">
                        {camera.cameras.map(camera =>
                            camera.id !== selectedCamera.id &&
                                <CameraPreview key={camera.id} camera={camera} setSelectedCamera={setSelectedCamera} />
                        )}
                    </Row>
                </Row>
                :
                <Row className="mt-3 d-flex justify-content-md-center">
                    {camera.cameras.map(camera =>
                        <CameraPreview key={camera.id} camera={camera} setSelectedCamera={setSelectedCamera} />
                    )}
                </Row>
            }
        </>
    )
})

export default PreviewPanel