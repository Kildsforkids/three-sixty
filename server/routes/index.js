const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const cameraRouter = require('./cameraRouter')
const logRouter = require('./logRouter')
const actionRouter = require('./actionRouter')
const classroomRouter = require('./classroomRouter')

router.use('/user', userRouter)
router.use('/camera', cameraRouter)
router.use('/log', logRouter)
router.use('/action', actionRouter)
router.use('/classroom', classroomRouter)

module.exports = router