import { KullaniciActions, KullaniciActionsTypes } from "../actions/kullanici.actions";
import { KullaniciItem } from '../models/kullanici-item.models';

export interface KullaniciState {
    GrubaGoreKullaniciListesi:Array<any>;
    KullaniciyaGoreGrupListesi:Array<any>;
    KullaniciListesi:Array<any>;
    GrupListesi:Array<any>;
    loading:boolean;
    error:Error;
}

const initialState = {
    GrubaGoreKullaniciListesi:[],
    KullaniciyaGoreGrupListesi:[],
    KullaniciListesi:[],
    GrupListesi:[],
    loading:false,
    error:undefined
}

export function KullaniciReducer(state:KullaniciState = initialState,action:KullaniciActions) {
    switch(action.type) {
        case KullaniciActionsTypes.GRUBA_GORE_KULLANICI_LISTELE_SUCCESS:
            return {
                ...state,
                GrubaGoreKullaniciListesi:action.payload,
                loading:false
            }
        case KullaniciActionsTypes.KULLANICIYA_GORE_GRUP_LISTELE_SUCCESS:
            return {
                ...state,
                KullaniciyaGoreGrupListesi:action.payload,
                loading:false
            }
        case KullaniciActionsTypes.KULLANICI_EKLE_SUCCESS:
            return {
                ...state,
                KullaniciListesi:[...state.KullaniciListesi,action.payload],
                loading:false
            }
        case KullaniciActionsTypes.GRUP_EKLE_SUCCESS:
            return {
                ...state,
                GrupListesi:[...state.GrupListesi,action.payload],
                loading:false
            }
        case KullaniciActionsTypes.KULLANICI_LISTELE_SUCCESS:
            return {
                ...state,
                KullaniciListesi:action.payload,
                loading:false
            }
        case KullaniciActionsTypes.GRUP_LISTELE_SUCCESS:
            return {
                ...state,
                GrupListesi:action.payload,
                loading:false
            }
        case KullaniciActionsTypes.KULLANICI_SIL_SUCCESS:
            return {
                ...state,
                KullaniciListesi:state.KullaniciListesi.filter(
                    item => item.id != action.payload
                ),
                loading:false
            }
        case KullaniciActionsTypes.GRUP_SIL_SUCCESS:
            return {
                ...state,
                GrupListesi:state.GrupListesi.filter(
                   item => item.id != action.payload
                ),
                loading:false
            }
        case KullaniciActionsTypes.KULLANICIYA_GRUP_EKLE_SUCCESS:
            return {
                ...state,
                KullaniciyaGoreGrupListesi:[...state.KullaniciyaGoreGrupListesi,
                state.GrupListesi.find(state => state.id == action.payload.GRUP_ID)],
                loading:false
            }
        case KullaniciActionsTypes.GRUBA_KULLANICI_EKLE_SUCCESS:
            return {
                ...state,
                GrubaGoreKullaniciListesi:[...state.GrubaGoreKullaniciListesi,
                state.KullaniciListesi.find(state => state.id == action.payload.KULLANICI_ID)],
                loading:false
            }
        case KullaniciActionsTypes.KULLANICIDAN_GRUP_SIL_SUCCESS:
            return {
                ...state,
                KullaniciyaGoreGrupListesi:state.KullaniciyaGoreGrupListesi.filter(
                    item => item.grup_id != action.payload.GRUP_ID
                )
            }
        case KullaniciActionsTypes.GRUPTAN_KULLANICI_SIL_SUCCESS:
            return {
                ...state,
                GrubaGoreKullaniciListesi:state.GrubaGoreKullaniciListesi.filter(
                    item => item.kullanici_id != action.payload.KULLANICI_ID
                )
            }
        case KullaniciActionsTypes.KULLANICIDAN_GRUP_SIL_FAILURE:
        case KullaniciActionsTypes.GRUBA_KULLANICI_EKLE_FAILURE:
        case KullaniciActionsTypes.GRUPTAN_KULLANICI_SIL_FAILURE:
        case KullaniciActionsTypes.GRUBA_GORE_KULLANICI_LISTELE_FAILURE:
        case KullaniciActionsTypes.GRUP_EKLE_FAILURE:
        case KullaniciActionsTypes.GRUP_LISTELE_FAILURE:
        case KullaniciActionsTypes.KULLANICIYA_GORE_GRUP_LISTELE_FAILURE:
        case KullaniciActionsTypes.KULLANICI_SIL_FAILURE:
        case KullaniciActionsTypes.GRUP_SIL_FAILURE:
        case KullaniciActionsTypes.KULLANICI_EKLE_FAILURE:
        case KullaniciActionsTypes.KULLANICI_LISTELE_FAILURE:
        case KullaniciActionsTypes.KULLANICIYA_GRUP_EKLE_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            state;
    }
}