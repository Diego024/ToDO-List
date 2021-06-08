import { GET_WEATHER, GET_CITY_INFO } from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return{
                ...state,
                data: [action.payload.data]
            }
        case GET_CITY_INFO:
            return {
                ...state, 
                cityInfo: [action.payload.cityInfo]
            }
        default:
            return state;
    }
}

export default reducer