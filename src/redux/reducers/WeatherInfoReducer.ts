import { AnyAction } from "redux"
import { initialState } from "../store"

export const weatherInforeducer = (state = initialState.weatherInfo, action: AnyAction) => {
    switch (action.type) {
        default: return state
    }
}