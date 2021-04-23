import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import {Table} from 'react-bootstrap'
import { Context } from '../index'
import {fetchActionTypes, fetchLogs, fetchUsers} from '../http/logAPI'

const LogsTable = observer(() => {
    const {logger} = useContext(Context)

    useEffect(() => {
        fetchActionTypes().then(data => logger.setActionTypes(data))
        fetchLogs().then(data => logger.setLogs(data))
        fetchUsers().then(data => logger.setUsers(data))
    }, [])

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
                {logger.logs.map(log =>
                    <tr key={log.id}>
                        <td>20.04.2021 15:00</td>
                        <td>{logger.users.find(user => user.id === log.userId).login}</td>
                        <td>{logger.actionTypes.find(action => action.id  === log.actionId)?.name}</td>
                        <td>{log.description}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
})

export default LogsTable