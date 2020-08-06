import { Action } from '@ngrx/store'

export enum HelperActionsTypes {
    CHANGE_TOGGLE_STATE = '[HELPER] CHANGE TOGGLE STATE'
}

export class ChangeToggleStateAction implements Action {
    readonly type = HelperActionsTypes.CHANGE_TOGGLE_STATE;
}

export type HelperActions = ChangeToggleStateAction;