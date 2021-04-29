const Router = require('express')
const router = new Router()
const streamController = require('../controllers/StreamController')

router.post('/', streamController.create)
router.delete('/:id', streamController.remove)
router.get('/', streamController.getAll)

module.exports = router