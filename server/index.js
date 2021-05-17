require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const google = require('googleapis')
const opn = require('open')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const cameraController = require('./controllers/cameraController')

const PORT = process.env.PORT || 5000

const client = {
    id: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_url: `http://localhost:${PORT}/api/stream/auth`,
    scope: [
        'https://www.googleapis.com/auth/youtube.readonly'
    ]
}
const oauth2Client = new google.Auth.OAuth2Client(client.id, client.secret, client.redirect_url)
const youtube = new google.youtube_v3.Youtube({ auth: oauth2Client })

const googleAuth = () => {
    const url = oauth2Client.generateAuthUrl({ scope: client.scope })
    opn(url)
}

const getAccessToken = (code) => {
    oauth2Client.getToken(code, (err, tokens) => {
        if (err) {
            console.log('Error while trying to retrieve access token', err)
            return
        }
        oauth2Client.credentials = tokens
        console.log(tokens)
    })
}

const getAllStreams = async () => {
    try {
        return await youtube.liveBroadcasts.list({
            part: ['snippet,contentDetails,status'],
            broadcastStatus: 'all',
            access_token: oauth2Client.credentials
        })
    }
    catch (e) {
        console.log(e)
    }
}

const findCameras = async () => {
    cameraController.getAllInside()
        .then(cameras => {
            cameras.map(camera => {
                cameraController.connectCamera(camera.dataValues.ip)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.get('/api/stream/auth', async (req, res) => {
    const {code} = req.query
    res.status(200).send(code)
    if (code)
        getAccessToken(code)
})
app.get('/api/stream/list', async (req, res) => {
    getAllStreams()
        .then(response => {
            const result = response.data.items.map(item => item.id)
            console.log(result)
            res.status(200).json({ result })
        })
        .catch(error => {
            console.log(error)
            res.status(403).json({ message: "Ошибка" })
        })
})

// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
        // findCameras()
        googleAuth()
    } catch (e) {
        console.log(e)
    }
}

start()