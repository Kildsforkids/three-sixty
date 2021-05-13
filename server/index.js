require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const cameraController = require('./controllers/cameraController')
const streamController = require('./controllers/streamController')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
        // const cameras = await cameraController.getAllInside()
        // cameras.map(async (camera) => {
        //     await cameraController.connectCamera(camera.dataValues.ip)
        // })
        const client = {
            id: process.env.GOOGLE_CLIENT_ID,
            secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_url: `http://localhost:${PORT}/api/stream/auth`,
            scope: 'https://www.googleapis.com/auth/youtube.readonly'
        }
        streamController.authorize(client)
    } catch (e) {
        console.log(e)
    }
}

start()