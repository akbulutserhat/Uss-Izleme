import { AuthState } from '../reducers/auth.reducer';

export interface AppState {
   readonly auth : AuthState;
}