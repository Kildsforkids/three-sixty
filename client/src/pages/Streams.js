import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Context } from '..'
import PreviewPanel from '../components/PreviewPanel'
import StreamsSchedule from '../components/StreamsSchedule'
import { fetchCameras, fetchClassrooms } from '../http/cameraAPI'
// import { fetchActionTypes } from '../http/logAPI'

const Streams = observer(() => {
    const {camera} = useContext(Context)

    useEffect(() => {
        // fetchActionTypes().then(data => logger.setActionTypes(data))
        fetchClassrooms().then(data => camera.setClassrooms(data))
        fetchCameras().then(data => camera.setCameras(data))
    }, [])

    return (
        <Container>
            <PreviewPanel />
            <StreamsSchedule />
        </Container>
    )
})

export default Streams