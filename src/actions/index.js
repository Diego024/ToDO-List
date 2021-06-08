export const GET_WEATHER = 'GET_WEATHER'
export const GET_CITY_INFO = 'GET_CITY_INFO'

export const getWeather = payload => ({
    type: GET_WEATHER,
    payload,
})

export const getCityInfo = payload => ({
    type: GET_CITY_INFO,
    payload,
})