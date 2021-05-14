require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const google = require('googleapis')
const opn = require('open')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const cameraController = require('./controllers/cameraController')
// const streamController = require('./controllers/streamController')

const PORT = process.env.PORT || 5000

const client = {
    id: process.env.GOOGLE_CLIENT_ID,
    secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_url: `http://localhost:${PORT}/api/stream/auth`,
    scope: 'https://www.googleapis.com/auth/youtube.readonly'
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
    await youtube.liveBroadcasts.list({
        part: ['snippet,contentDetails,status'],
        broadcastStatus: 'all',
        access_token: oauth2Client.credentials
    })
    .then(response => {
        response.data.items.map(item => {
            console.log(item.id)
        })
        return response.data.items
    })
    .catch(error => {
        console.error(error)
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
            console.log(response)
            res.status(200).json({ response })
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
        // const cameras = await cameraController.getAllInside()
        // cameras.map(async (camera) => {
        //     await cameraController.connectCamera(camera.dataValues.ip)
        // })
        // const client = {
        //     id: process.env.GOOGLE_CLIENT_ID,
        //     secret: process.env.GOOGLE_CLIENT_SECRET,
        //     redirect_url: `http://localhost:${PORT}/api/stream/auth`,
        //     scope: 'https://www.googleapis.com/auth/youtube.readonly'
        // }
        // streamController.authenticate()
        googleAuth()
    } catch (e) {
        console.log(e)
    }
}

start()