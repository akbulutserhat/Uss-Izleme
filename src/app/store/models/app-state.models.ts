import { AuthState } from '../reducers/auth.reducer';
import { YetkiState } from '../reducers/yetki.reducer';
import { HelperState } from '../reducers/helper.reducer';

export interface AppState {
   auth : AuthState;
   yetki: YetkiState;
   helper: HelperState;
}