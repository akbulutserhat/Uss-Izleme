import { Action } from '@ngrx/store'
import { LoginItem } from '../models/login-item.models';
import { UserItem } from '../models/user-item-models';


export enum AuthActionTypes {
    LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS',
    LOGIN_FAILURE = '[AUTH] LOGIN FAILURE',
    GET_LOGIN_STATUS = '[AUTH] GET LOGIN STATUS',
    LOGOUT = '[AUTH] LOGOUT',
    
}



export class LoginActionSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;

    constructor(public payload:UserItem) {}
}

export class LoginActionFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;

    constructor(public payload:Error) {}
}

export class LogOutAction implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class GetLoginStatus implements Action {
    readonly type = AuthActionTypes.GET_LOGIN_STATUS;

    constructor(public payload:boolean){}
}


export type AuthActions =   LogOutAction |
                            LoginActionFailure | 
                            LoginActionSuccess |
                            GetLoginStatus