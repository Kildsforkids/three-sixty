import {makeAutoObservable} from 'mobx'

export default class StreamStore {
    constructor() {
        this._streams = []
        this._youtubeEvents = []
        makeAutoObservable(this)
    }

    setStreams(streams) {
        this._streams = streams
    }

    setYoutubeEvents(events) {
        this._youtubeEvents = events
    }

    get streams() {
        return this._streams
    }

    get youtubeEvents() {
        return this._youtubeEvents
    }
}