const Router = require('express')
const router = new Router()
const streamController = require('../controllers/StreamController')

router.post('/', streamController.create)
router.delete('/:id', streamController.remove)
router.get('/', streamController.getAll)
// router.get('/auth', async (req, res) => {
//     const {code} = req.query
//     res.status(200).send(code)
//     if (code)
//         streamController.getAccessToken(code)
//     res.end()
// })
// router.get('/list', streamController.getAllStreams)

module.exports = router