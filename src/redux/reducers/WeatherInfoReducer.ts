import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

export const weatherInforeducer = (state = initialState.weatherInfo, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.UPDATE_LAT_AND_LON: return {
            ...state,
            coordinates: {
                ...state.coordinates,
                lat: action.payload.lat,
                lon: action.payload.lon
            }
        }
        case ACTIONS.UPDATE_WEATHER_DATA: return {
            ...state,
            data: action.payload
        }
        default: return state
    }
}