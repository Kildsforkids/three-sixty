const {Camera} = require('../models/models')
const axios = require('axios')

class CameraController {
    // 192.168.1.188
    async connectCamera(ip) {
        await axios.post(`http://${ip}:20000/osc/commands/execute`, {
            name: 'camera._connect',
            parameters: {
                hw_time: '04051020[[20]21][.30]',
                time_zone: 'Asia/Vladivostok'
            }
        })
        .then(res => {
            if (res.data.state === 'done') {
                // console.log(res.data.results.last_info.state)
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

    async create(req, res) {
        const {ip, classroomId} = req.body
        const camera = await Camera.create({ip, classroomId})
        return res.json(camera)
    }

    async getAll(req, res) {
        const cameras = await Camera.findAll()
        return res.json(cameras)
    }

    async getAllInside() {
        const cameras = await Camera.findAll()
        return cameras
    }

    async getOne(req, res) {
        const {id} = req.params
        const camera = await Camera.findOne({where: {id}})
        return res.json(camera)
    }
}

module.exports = new CameraController()