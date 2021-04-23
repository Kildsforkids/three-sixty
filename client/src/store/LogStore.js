import {makeAutoObservable} from 'mobx'

export default class LogStore {
    constructor() {
        this._logs = [
            {id: 1, userId: 1, actionId: 1, description: 'Camera 0'},
            {id: 2, userId: 1, actionId: 1, description: 'Camera 1'},
            {id: 3, userId: 2, actionId: 1, description: 'Camera 3'},
            {id: 4, userId: 1, actionId: 1, description: 'Camera 2'}
        ]
        this._actionTypes = [
            {id: 1, name: 'Изменение настроек камеры'}
        ]
        this._users = [
            {id: 1, login: 'user1'},
            {id: 2, login: 'user2'}
        ]
        makeAutoObservable(this)
    }

    setLogs(logs) {
        this._logs = logs
    }

    setActionTypes(actionTypes) {
        this._actionTypes = actionTypes
    }

    setUsers(users) {
        this._users = users
    }

    get logs() {
        return this._logs
    }

    get actionTypes() {
        return this._actionTypes
    }

    get users() {
        return this._users
    }
}