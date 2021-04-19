const {Action} = require('../models/models')
const ApiError = require('../error/ApiError')

class ActionController {
    async create(req, res) {
        const {name} = req.body
        const action = await Action.create({name})
        return res.json(action)
    }

    async getAll(req, res) {
        const actions = await Action.findAll()
        return res.json(actions)
    }
}

module.exports = new ActionController()