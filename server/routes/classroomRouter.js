const Router = require('express')
const router = new Router()
const classroomController = require('../controllers/classroomController')

router.post('/', classroomController.create)
router.get('/', classroomController.getAll)

module.exports = router