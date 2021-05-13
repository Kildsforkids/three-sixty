const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cameraRouter = require('./cameraRouter')
const logRouter = require('./logRouter')
const classroomRouter = require('./classroomRouter')
const streamRouter = require('./streamRouter')

router.use('/user', userRouter)
router.use('/camera', cameraRouter)
router.use('/log', logRouter)
router.use('/classroom', classroomRouter)
router.use('/stream', streamRouter)

module.exports = router