const {Camera} = require('../models/models')

class CameraController {
    async create(req, res) {
        const {ip, classroomId} = req.body
        const camera = await Camera.create({ip, classroomId})
        return res.json(camera)
    }

    async getAll(req, res) {
        const cameras = await Camera.findAll()
        return res.json(cameras)
    }

    async getOne(req, res) {
        const {id} = req.params
        const camera = await Camera.findOne({where: {id}})
        return res.json(camera)
    }
}

module.exports = new CameraController()