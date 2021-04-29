import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import {Table} from 'react-bootstrap'
import { Context } from '../index'
import {fetchLogs, fetchUsers} from '../http/logAPI'
import { getDate, LOG_CONSTS } from '../utils/consts'

const LogsTable = observer(() => {
    const {logger} = useContext(Context)

    useEffect(() => {
        // fetchActionTypes().then(data => logger.setActionTypes(data))
        fetchLogs().then(data => logger.setLogs(data))
        fetchUsers().then(data => logger.setUsers(data))
    }, [])

    return (
        <>
        {logger.logs.length > 0 ?
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
                            <td>
                            {
                                getDate(log.updatedAt)
                            }
                            </td>
                            <td>{logger.users.find(user => user.id === log.userId)?.login}</td>
                            <td>{LOG_CONSTS[log.actionType-1]}</td>
                            <td>{log.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            :
            <h5>Нет записей в архиве</h5>
        }
        </>
    )
})

export default LogsTable