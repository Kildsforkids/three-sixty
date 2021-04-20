import {makeAutoObservable} from 'mobx'

export default class ScheduleStore {
    constructor() {
        this._filter = {
            timeStart: null,
            timeEnd: null,
            classrooms: [
                '1632',
                '1410'
            ],
            status: [
                'ok'
            ]

        }
        makeAutoObservable(this)
    }

    setFilter(filter) {
        this._filter = filter
    }

    get filter(){
        return this._filter
    }
}