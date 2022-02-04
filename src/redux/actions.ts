import axios from 'axios'
import { Dispatch } from "redux"
import { IReduxStore } from "../types/ReduxStore"
import { CountryCodes } from '../data/CountryCodes'

const { REACT_APP_BASE_URL: BASE_URL, REACT_APP_API_KEY: API_KEY } = process.env
type strNull = string | null

export const ACTIONS = {
    UPDATE_CITY_AND_COUNTRY: 'UPDATE_CITY_AND_COUNTRY',
    UPDATE_LAT_AND_LON: 'UPDATE_LAT_AND_LON',
    UPDATE_WEATHER_DATA: 'UPDATE_WEATHER_DATA'
}

export const updateCityAndCountryAction = (city: string, country: string) => ({
    type: ACTIONS.UPDATE_CITY_AND_COUNTRY,
    payload: { city, country }
})

export const updateLatAndLonAction = () => async (dispatch: Dispatch, getState: () => IReduxStore) => {
    try {
        const { inputs } = getState()
        const { city, country } = inputs
        const countryCode = CountryCodes.find(object => object.name === country)
        const { data } = await axios.get(`${BASE_URL}/geo/1.0/direct?q=${city},${countryCode?.code}&appid=${API_KEY}`)
        dispatch({
            type: ACTIONS.UPDATE_LAT_AND_LON,
            payload: data[0]
        })
    } catch (error) {
        console.log(error)
    }
}

export const fetchWeatherAction = (lat: strNull, lon: strNull) => async (dispatch: Dispatch) => {
    try {
        if (!lat || !lon) return 
        const { data } = await axios.get(`${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        dispatch({
            type: ACTIONS.UPDATE_WEATHER_DATA,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}