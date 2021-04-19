const Router = require('express')
const router = new Router()
const cameraController = require('../controllers/cameraController')

router.post('/', cameraController.create)
router.get('/', cameraController.getAll)
router.get('/:id', cameraController.getOne)

module.exports = router