import { HelperActions, HelperActionsTypes } from "../actions/helper.actions";

export interface HelperState {
    toggleFlag:boolean;
}

const initialState = {
    toggleFlag:true
}

export function HelperReducer(state:HelperState = initialState,action:HelperActions) {
    switch(action.type) {
        case HelperActionsTypes.CHANGE_TOGGLE_STATE:
            return {
                ...state,
                toggleFlag:!state.toggleFlag
            }
        default:
            state;
    }
}