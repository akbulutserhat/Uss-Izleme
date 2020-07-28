import { AuthActions, AuthActionTypes } from "../actions/auth.actions";
import { UserItem } from "../models/user-item-models";


export interface AuthState {
    user:UserItem,
    isLogin:boolean,
    loading:boolean,
    error:Error
}

const initialState = {
    user:null,
    isLogin:false,
    loading:false,
    error:undefined
}

export function AuthReducer(state:AuthState = initialState,action:AuthActions) {
    switch(action.type) {
        case AuthActionTypes.LOGIN_SUCCESS:
            console.log('reducera girdi!', action.payload);
            localStorage.setItem("token",action.payload.access_token);
            return {
                ...state,
                loading:false,
                isLogin:true,
                user:action.payload
            }
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                isLogin:false,
                user:null,
                error:action.payload
            }
        case AuthActionTypes.LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                loading:false,
                isLogin:false,
                user:null
            }
        default:
            return state;
    }
}