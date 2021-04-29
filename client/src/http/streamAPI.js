import {$authHost} from './index'

export const createStream = async (stream) => {
    const {data} = await $authHost.post('api/stream', stream)
    return data
}

export const fetchStreams = async () => {
    const {data} = await $authHost.get('api/stream')
    return data
}

export const deleteStream = async (id) => {
    const {data} = await $authHost.delete(`api/stream/${id}`)
    return data
}