import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import {Table} from 'react-bootstrap'
import { Context } from '..'

const LogsTable = observer(() => {
    const context = useContext(Context)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Время</th>
                    <th>Пользователь</th>
                    <th>Тип события</th>
                    <th>Дополнительно</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20.04.2021 15:00</td>
                    <td>user1</td>
                    <td>Изменение настроек камеры</td>
                    <td></td>
                </tr>
                <tr>
                    <td>20.04.2021 16:39</td>
                    <td>user2</td>
                    <td>Изменение настроек камеры</td>
                    <td></td>
                </tr>
                <tr>
                    <td>20.04.2021 17:51</td>
                    <td>user1</td>
                    <td>Изменение настроек камеры</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
})

export default LogsTable