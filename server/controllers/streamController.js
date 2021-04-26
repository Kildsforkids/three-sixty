const {Stream} = require('../models/models')
const ApiError = require('../error/ApiError')

class StreamController {
    async create(req, res) {
        const {name, cameraId, time_start, time_end, link} = req.body
        const stream = await Stream.create({name, cameraId, time_start, time_end, link})
        return res.json(stream)
    }

    async getAll(req, res) {
        const streams = await Stream.findAll()
        return res.json(streams)
    }
}

module.exports = new StreamController()