import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../index'

const PreviewPanel = observer(() => {
    const {camera} = useContext(Context)
    return (
        <Container>
            <Row>
                <Col>
                    <video poster="">

                    </video>
                </Col>
                <Col>
                    <video poster="">

                    </video>
                </Col>
                <Col>
                    <video poster="">

                    </video>
                </Col>
            </Row>
        </Container>
    )
})

export default PreviewPanel