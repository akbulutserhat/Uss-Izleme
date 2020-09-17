import { AuthState } from '../reducers/auth.reducer';
import { YetkiState } from '../reducers/yetki.reducer';
import { KullaniciState } from '../reducers/kullanici.reducer';

export interface AppState {
   auth : AuthState;
   yetki: YetkiState;
   kullanici:KullaniciState;
}