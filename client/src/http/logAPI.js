import {$authHost} from './index'

export const createLog = async (log) => {
    const {data} = await $authHost.post('api/log', log)
    return data
}

export const fetchLogs = async () => {
    const {data} = await $authHost.get('api/log')
    return data
}

export const fetchUsers = async () => {
    const {data} = await $authHost.get('api/user')
    return data
}