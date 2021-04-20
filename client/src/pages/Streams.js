import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PreviewPanel from '../components/PreviewPanel'
import StreamsSchedule from '../components/StreamsSchedule'

const Streams = () => {
    return (
        <Container>
            <PreviewPanel />
            <StreamsSchedule />
        </Container>
    )
}

export default Streams