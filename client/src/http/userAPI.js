import {$authHost, $host} from './index'

export const registration = (login, password) => {
    const response = await $host.post('api/auth/registration', {login, password, role: 'USER'})
    return response
}