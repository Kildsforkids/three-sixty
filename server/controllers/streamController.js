const {Stream} = require('../models/models')
const google = require('googleapis')
const opn = require('open')
// const ApiError = require('../error/ApiError')

class StreamController {

    constructor() {
        this._oauth2Client = {}
    }

    authorize(client) {
        this._oauth2Client = new google.Auth.OAuth2Client(client.id, client.secret, client.redirect_url)
        const url = this._oauth2Client.generateAuthUrl({ scope: client.scope })
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
        })
    }

    async getAllStreams() {
        const youtube = new google.youtube_v3.Youtube({ auth: this._oauth2Client })
        await youtube.live_broadcasts.list({
            part: ['snippet,contentDetails,status'],
            broadcastStatus: 'all'
        })
        .then(response => {
            response.data.items.map(item => {
                console.log(item.id)
            })
            return response.data.items
        })
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