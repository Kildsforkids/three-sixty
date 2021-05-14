const {Stream} = require('../models/models')
const google = require('googleapis')
const opn = require('open')
const ApiError = require('../error/ApiError')
// const fs = require('fs')
// const path = require('path')

class StreamController {

    // constructor() {
    //     const client = {
    //         id: process.env.GOOGLE_CLIENT_ID,
    //         secret: process.env.GOOGLE_CLIENT_SECRET,
    //         redirect_url: `http://localhost:${process.env.PORT}/api/stream/auth`,
    //         scope: 'https://www.googleapis.com/auth/youtube.readonly'
    //     }
    //     this._oauth2Client = new google.Auth.OAuth2Client(client.id, client.secret, client.redirect_url)
    //     this._youtube = new google.youtube_v3.Youtube({ auth: this._oauth2Client })
    //     this._client = client
    // }

    authenticate() {
        const url = this._oauth2Client.generateAuthUrl({ scope: this._client.scope })
        opn(url)
    }

    getAccessToken(code) {
        this._oauth2Client.getToken(code, (err, tokens) => {
            if (err) {
                console.log('Error while trying to retrieve access token', err)
                return
            }
            this._oauth2Client.credentials = tokens
            console.log(tokens)
            fs.writeFileSync(path.join(__dirname, '../config.json'), JSON.stringify({
                oauth2Client: this._oauth2Client,
                youtube: this._youtube
            }))
        })
    }

    getYoutube() {
        console.log(this._youtube)
    }

    async getAllStreams(req, res, next) {
        this.getYoutube()
        const data = fs.readFileSync(path.join(__dirname, '../config.json'))
        const {oauth2Client, youtube} = await JSON.parse(data)
        const streams = await youtube.liveBroadcasts.list({
            part: ['snippet,contentDetails,status'],
            broadcastStatus: 'all'
        })
        // .then(response => {
        //     response.data.items.map(item => {
        //         console.log(item.id)
        //     })
        //     return res.json(response.data.items)
        // })
        // .catch(error => {
        //     console.error(error)
        //     return next(ApiError.badRequest('Не удалось получить список запланированных событий'))
        // })
        // if (!streams)
        //     return next(ApiError.badRequest('Не удалось получить список запланированных событий'))
        // return res.json(streams)
        return res.json(streams)
    }

    async create(req, res) {
        const {name, cameraId, time_start, time_end, link} = req.body
        const stream = await Stream.create({name, cameraId, time_start, time_end, link})
        return res.json(stream)
    }

    async getAll(req, res) {
        const streams = await Stream.findAll()
        return res.json(streams)
    }

    async remove(req, res) {
        const id = req.params.id
        console.log(id ? id : 0)
        const data = await Stream.destroy({where: {id}})
        return res.json(data)
    }
}

module.exports = new StreamController()