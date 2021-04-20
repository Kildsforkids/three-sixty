import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import {Container, Table} from 'react-bootstrap'

const StreamsSchedule = observer(() => {
    const context = useContext(Context)
    return (
        <Container>
            <h4>Расписание трансляций</h4>
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
        </Container>
    )
})

export default StreamsSchedule