import {$authHost, $host} from './index'

export const createClassroom = async (classroom) => {
    const {data} = await $authHost.post('api/classroom', classroom)
    return data
}

export const fetchClassrooms = async () => {
    const {data} = await $authHost.get('api/classroom')
    return data
}

export const createCamera = async (camera) => {
    const {data} = await $authHost.post('api/camera', camera)
    return data
}

export const fetchCameras = async () => {
    const {data} = await $authHost.get('api/camera')
    return data
}

export const fetchOneCamera = async (id) => {
    const {data} = await $authHost.get('api/camera/' + id)
    return data
}