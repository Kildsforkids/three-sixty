import {$authHost, $host} from './index'

export const createStream = async (stream) => {
    const {data} = await $authHost.post('api/stream', stream)
    return data
}

export const fetchStreams = async () => {
    const {data} = await $host.get('api/stream')
    return data
}