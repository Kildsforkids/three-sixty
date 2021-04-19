const Router = require('express')
const router = new Router()
const actionController = require('../controllers/actionController')

router.post('/', actionController.create)
router.get('/', actionController.getAll)

module.exports = router