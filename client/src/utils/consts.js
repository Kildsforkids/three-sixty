export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const STREAMS_ROUTE = '/streams'
export const SETTINGS_ROUTE = '/settings'
export const ARCHIVE_ROUTE = '/archive'
export const LOG_CONSTS = [
    'Изменение настроек камеры',
    'Добавление новой аудитории',
    'Создание нового запланированного события'
]

export const getDate = (parseDate) => {
    const date = new Date(parseDate)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const monthF = month < 10 ? '0' + month : month
    const day = date.getDate()
    const dayF = day < 10 ? '0' + day : day
    const hours = date.getHours()
    const hoursF = hours < 10 ? '0' + hours : hours
    const minutes = date.getMinutes()
    const minutesF = minutes < 10 ? '0' + minutes : minutes
    const seconds = date.getSeconds()
    const secondsF = seconds < 10 ? '0' + seconds : seconds
    return `${year}-${monthF}-${dayF} ${hoursF}:${minutesF}:${secondsF}`
}