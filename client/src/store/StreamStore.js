import {makeAutoObservable} from 'mobx'

export default class StreamStore {
    constructor() {
        this._streams = []
        makeAutoObservable(this)
    }

    setStreams(streams) {
        this._streams = streams
    }

    get streams() {
        return this._streams
    }
}