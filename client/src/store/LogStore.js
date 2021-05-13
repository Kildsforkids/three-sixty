import {makeAutoObservable} from 'mobx'

export default class LogStore {
    constructor() {
        this._logs = []
        this._users = []
        makeAutoObservable(this)
    }

    setLogs(logs) {
        this._logs = logs
    }

    setUsers(users) {
        this._users = users
    }

    get logs() {
        return this._logs
    }

    get users() {
        return this._users
    }
}