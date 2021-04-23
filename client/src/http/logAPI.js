import {$authHost, $host} from './index'

export const createActionType = async (actionType) => {
    const {data} = await $authHost.post('api/action', actionType)
    return data
}

export const fetchActionTypes = async () => {
    const {data} = await $host.get('api/action')
    return data
}

export const createLog = async (log) => {
    const {data} = await $authHost.post('api/log', log)
    return data
}

export const fetchLogs = async () => {
    const {data} = await $host.get('api/log')
    return data
}

export const fetchUsers = async () => {
    const {data} = await $authHost.get('api/user')
    return data
}