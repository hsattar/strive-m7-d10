import { AnyAction } from "redux"
import { initialState } from "../store"

export const Inputsreducer = (state = initialState.inputs, action: AnyAction) => {
    switch (action.type) {
        default: return state
    }
}