import {makeAutoObservable} from 'mobx'

export default class CameraStore {
    constructor() {
        this._classrooms = []
        this._cameras = []
        this._selectedCamera = {}
        this._selectedClassroom = {}
        makeAutoObservable(this)
    }

    setClassrooms(classrooms) {
        this._classrooms = classrooms
    }

    setCameras(cameras) {
        this._cameras = cameras
    }

    setSelectedClassroom(classroom) {
        this._selectedClassroom = classroom
    }

    setSelectedCamera(camera) {
        this._selectedCamera = camera
    }

    get classrooms() {
        return this._classrooms
    }

    get cameras() {
        return this._cameras
    }

    get selectedClassroom() {
        return this._selectedClassroom
    }

    get selectedCamera() {
        return this._selectedCamera
    }
}