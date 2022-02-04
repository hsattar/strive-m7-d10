import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

export const Inputsreducer = (state = initialState.inputs, action: AnyAction) => {
    switch (action.type) {
        case ACTIONS.UPDATE_CITY_AND_COUNTRY: return {
            ...state,
            city: action.payload.city,
            country: action.payload.country
        }
        default: return state
    }
}