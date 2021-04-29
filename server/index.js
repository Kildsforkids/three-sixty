require('dotenv').config()
const express = require('express')
const axios = require('axios')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const cameraController = require('./controllers/cameraController')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler)
// 192.168.1.188
const connectCamera = async (ip) => {
    await axios.post(`http://${ip}:20000/osc/commands/execute`, {
        name: 'camera._connect',
        parameters: {
            hw_time: '04051020[[20]21][.30]',
            time_zone: 'Asia/Vladivostok'
        }
    })
    .then(res => {
        if (res.data.state === 'done') {
            console.log(res.data.results.last_info.state)
            const options = {
                headers: {
                    'Fingerprint': res.data.results.Fingerprint,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }

            statePolling = () => axios.post(`http://${ip}:20000/osc/state`, {}, options)
                .then(res => {
                    setTimeout(statePolling, 1000)
                })
                .catch(error => {
                    console.error(error)
                })
            
            statePolling()
        }
    })
    .catch(error => {
        console.error(error)
    })
}

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
        const cameras = await cameraController.getAll()
        cameras.map(async (camera) => {
            await connectCamera(camera.dataValues.ip)
        })
    } catch (e) {
        console.log(e)
    }
}

start()