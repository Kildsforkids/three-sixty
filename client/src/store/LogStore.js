import {makeAutoObservable} from 'mobx'

export default class LogStore {
    constructor() {
        this._logs = []
        // this._actionTypes = [
        //     {id: 1, name: 'Изменение настроек камеры'}
        // ]
        this._users = []
        makeAutoObservable(this)
    }

    setLogs(logs) {
        this._logs = logs
    }

    // setActionTypes(actionTypes) {
    //     this._actionTypes = actionTypes
    // }

    setUsers(users) {
        this._users = users
    }

    get logs() {
        return this._logs
    }

    // get actionTypes() {
    //     return this._actionTypes
    // }

    get users() {
        return this._users
    }
}