const {ClassRoom} = require('../models/models')

class ClassroomController {
    async create(req, res) {
        const {name, capacity} = req.body
        const classroom = await ClassRoom.create({name, capacity})

        return res.json(classroom)
    }

    async getAll(req, res) {
        const classrooms = await ClassRoom.findAll()
        return res.json(classrooms)
    }
}

module.exports = new ClassroomController()