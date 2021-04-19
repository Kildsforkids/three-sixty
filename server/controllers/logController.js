const {Log} = require('../models/models')
const ApiError = require('../error/ApiError')

class LogController {
    async create(req, res) {
        const {userId, actionId, description} = req.body
        const log = await Log.create({userId, actionId, description})
        return res.json(log)
    }

    async getAll(req, res) {
        const logs = await Log.findAll()
        return res.json(logs)
    }
}

module.exports = new LogController()