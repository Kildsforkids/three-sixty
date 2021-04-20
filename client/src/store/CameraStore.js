import {makeAutoObservable} from 'mobx'

export default class CameraStore {
    constructor() {
        this._classrooms = [
            {id: 1, name: '1632', capacity: 5},
            {id: 2, name: '1523', capacity: 15},
        ]

        this._cameras = [
            {id: 1, ip: '192.168.1.188', classroomId: 1},
            {id: 2, ip: '192.168.1.101', classroomId: 2},
        ]
        makeAutoObservable(this)
    }

    setClassrooms(classrooms) {
        this._classrooms = classrooms
    }

    setCameras(cameras) {
        this._cameras = cameras
    }

    get classrooms() {
        return this._classrooms
    }

    get cameras() {
        return this._cameras
    }
}