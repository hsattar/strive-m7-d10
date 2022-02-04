import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import { IReduxStore } from "../types/ReduxStore"
import { Inputsreducer } from "./reducers/InputsReducer"
import { weatherInforeducer } from "./reducers/WeatherInfoReducer"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    inputs: {
        city: 'Manchester',
        country: 'United Kingdom'    
    },
    weatherInfo: {
        coordinates: { lat: '', lon: ''},
        data: []
    }
}

const rootReducer = combineReducers({
    inputs: Inputsreducer,
    weatherInfo: weatherInforeducer
})


export const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))
