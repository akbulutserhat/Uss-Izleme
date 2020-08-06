import { YetkiActions, YetkiActionTypes } from "../actions/yetki.actions";
import { KullaniciItem } from "../models/yetki/kullanici-item.models";
import { YetkiItem } from '../models/yetki/yetki-item.models';
import { YetkiHastaneDetayItem } from '../models/yetki/yetki-detay/yetki-hastane-detay-item.models';
import { YetkiHizmetDetayItem } from '../models/yetki/yetki-detay/yetki-hizmet-detay-item.models';


export interface YetkiState {
    kullaniciListesi:KullaniciItem[];
    yetkiListesi:YetkiItem[];
    yetkiHastaneDetayListesi:YetkiHastaneDetayItem[];
    yetkiHizmetDetayListesi:YetkiHizmetDetayItem[];
    kullaniciYetkiHastaneDetayListesi:YetkiHastaneDetayItem[];
    kullaniciYetkiHizmetDetayListesi:YetkiHizmetDetayItem[];
    loading:boolean;
    error:Error;
}

const initialState = {
    kullaniciListesi:[],
    yetkiHastaneDetayListesi:[],
    yetkiHizmetDetayListesi:[],
    kullaniciYetkiHastaneDetayListesi:[],
    kullaniciYetkiHizmetDetayListesi:[],
    yetkiListesi:[],
    loading:false,
    error:undefined
}

export function YetkiReducer(state:YetkiState = initialState,action:YetkiActions) {
    switch(action.type) {
        case YetkiActionTypes.BUTUN_LISTELERI_TEMIZLE:
            return {
                ...state,
                loading:false,
                kullaniciListesi:[],
                yetkiHastaneDetayListesi:[],
                yetkiHizmetDetayListesi:[],
                kullaniciYetkiHastaneDetayListesi:[],
                kullaniciYetkiHizmetDetayListesi:[],
                yetkiListesi:[]
            }
        case YetkiActionTypes.KULLANICI_HARICI_LISTELERI_TEMIZLE:
            return {
                ...state,
                loading:false,
                yetkiHastaneDetayListesi:[],
                yetkiHizmetDetayListesi:[],
                kullaniciYetkiHastaneDetayListesi:[],
                kullaniciYetkiHizmetDetayListesi:[],
                yetkiListesi:[]
            }
        case YetkiActionTypes.KULLANICI_LISTELEME_SUCCESS:
            return {
                ...state,
                kullaniciListesi:action.payload,
                loading:false
            }
        case YetkiActionTypes.YETKI_LISTELEME_SUCCESS:
            return {
                ...state,
                yetkiListesi:action.payload,
                loading:false
            }
        /*case YetkiActionTypes.YETKI_KAYDETME_SUCCESS:
            return {
                ...state,
                loading:false
            }
        case YetkiActionTypes.YETKI_SILME_SUCCESS:
            return {
                ...state,
                loading:false
            }*/
        case YetkiActionTypes.YETKI_HASTANE_DETAY_LISTELEME_SUCCESS:
            return {
                ...state,
                yetkiHastaneDetayListesi:action.payload,
                loading:false,
                yetkiHizmetDetayListesi:[]
            }
        case YetkiActionTypes.YETKI_HIZMET_DETAY_LISTELEME_SUCCESS:
            return {
                ...state,
                yetkiHizmetDetayListesi:action.payload,
                loading:false,
               yetkiHastaneDetayListesi:[]
            }
        case YetkiActionTypes.KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_SUCCESS:
            return {
                ...state,
                kullaniciYetkiHastaneDetayListesi:action.payload,
                loading:false,
            }
        case YetkiActionTypes.KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_SUCCESS:
            return {
                ...state,
                kullaniciYetkiHizmetDetayListesi:action.payload,
                loading:false,
            }
        case YetkiActionTypes.KULLANICI_LISTELEME_FAILURE:
        case YetkiActionTypes.YETKI_LISTELEME_FAILURE:
        case YetkiActionTypes.KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_FAILURE:
        case YetkiActionTypes.KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_FAILURE:
        case YetkiActionTypes.YETKI_HASTANE_DETAY_LISTELEME_FAILURE:
        case YetkiActionTypes.YETKI_HIZMET_DETAY_LISTELEME_FAILURE:
        //case YetkiActionTypes.YETKI_SILME_FAILURE:
        //case YetkiActionTypes.YETKI_KAYDETME_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        default:
            return state;
    }
}