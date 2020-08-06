import { Action } from '@ngrx/store';
import { KullaniciItem } from '../models/yetki/kullanici-item.models';
import { YetkiItem } from '../models/yetki/yetki-item.models';
import { YetkiHastaneDetayItem } from '../models/yetki/yetki-detay/yetki-hastane-detay-item.models';
import {  YetkiHizmetDetayItem } from '../models/yetki/yetki-detay/yetki-hizmet-detay-item.models'

export enum YetkiActionTypes {
    KULLANICI_LISTELEME_SUCCESS = '[YETKI] KULLANICI LISTELEME SUCCESS',
    KULLANICI_LISTELEME_FAILURE = ' [YETKI] KULLANICI LISTELEME FAILURE',
    BUTUN_LISTELERI_TEMIZLE='[YETKI] BUTUN LISTELERI TEMIZLE',
    KULLANICI_HARICI_LISTELERI_TEMIZLE = '[YETKI]  KULLANICI HARICI LISTELERI TEMIZLE',
    YETKI_LISTELEME_SUCCESS = '[YETKI] YETKI LISTELEME SUCCESS',
    YETKI_LISTELEME_FAILURE = '[YETKI] YETKI LISTELEME FAILURE',
    /*YETKI_KAYDETME_SUCCESS = '[YETKI] YETKI KAYDETME SUCCESS',
    YETKI_KAYDETME_FAILURE = '[YETKI] YETKI KAYDETME FAILURE',
    YETKI_SILME_SUCCESS = '[YETKI] YETKI SILME SUCCESS',
    YETKI_SILME_FAILURE = '[YETKI] YETKI SILME FAILURE',*/
    YETKI_HASTANE_DETAY_LISTELEME_SUCCESS = '[YETKI] YETKI HASTANE DETAY LISTELEME SUCCESS',
    YETKI_HASTANE_DETAY_LISTELEME_FAILURE = '[YETKI] YETKI HASTANE DETAY LISTELEME FAILURE',
    YETKI_HIZMET_DETAY_LISTELEME_SUCCESS = '[YETKI] YETKI HIZMET DETAY LISTELEME SUCCESS',
    YETKI_HIZMET_DETAY_LISTELEME_FAILURE = '[YETKI] YETKI HIZMET DETAY LISTELEME FAILURE',
    KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_SUCCESS = '[YETKI] KULLANICI YETKI HASTANE DETAY LISTELEME SUCCESS',
    KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_FAILURE = '[YETKI] KULLANICI YETKI HASTANE DETAY LISTELEME FAILURE',
    KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_SUCCESS = '[YETKI] KULLANICI YETKI HIZMET DETAY LISTELEME SUCCESS',
    KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_FAILURE = '[YETKI] KULLANICI YETKI HIZMET DETAY LISTELEME FAILURE'
}

export class KullaniciListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.KULLANICI_LISTELEME_SUCCESS;

    constructor(public payload:KullaniciItem[]){}
}

export class YetkiListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.YETKI_LISTELEME_SUCCESS;

    constructor(public payload:YetkiItem[]){}
}

export class KullaniciListelemeFailure implements Action {
    readonly type = YetkiActionTypes.KULLANICI_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class YetkiListelemeFailure implements Action {
    readonly type = YetkiActionTypes.YETKI_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class YetkiHastaneDetayListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.YETKI_HASTANE_DETAY_LISTELEME_SUCCESS;

    constructor(public payload:YetkiHastaneDetayItem[]){}
}

export class YetkiHastaneDetayListelemeFailure implements Action {
    readonly type = YetkiActionTypes.YETKI_HASTANE_DETAY_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class YetkiHizmetDetayListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.YETKI_HIZMET_DETAY_LISTELEME_SUCCESS;

    constructor(public payload:YetkiHizmetDetayItem[]){}
}

export class YetkiHizmetDetayListelemeFailure implements Action {
    readonly type = YetkiActionTypes.YETKI_HIZMET_DETAY_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciYetkiHastaneDetayListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_SUCCESS;

    constructor(public payload:YetkiHastaneDetayItem[]){}
}

export class KullaniciYetkiHastaneDetayListelemeFailure implements Action {
    readonly type = YetkiActionTypes.KULLANICI_YETKI_HASTANE_DETAY_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciYetkiHizmetDetayListelemeSuccess implements Action {
    readonly type = YetkiActionTypes.KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_SUCCESS;

    constructor(public payload:YetkiHizmetDetayItem[]){}
}

export class KullaniciYetkiHizmetDetayListelemeFailure implements Action {
    readonly type = YetkiActionTypes.KULLANICI_YETKI_HIZMET_DETAY_LISTELEME_FAILURE;

    constructor(public payload:Error){}
}

export class ButunListeleriTemizle implements Action {
    readonly type = YetkiActionTypes.BUTUN_LISTELERI_TEMIZLE;
}

/*export class YetkiKaydetmeSuccess implements Action {
    readonly type = YetkiActionTypes.YETKI_KAYDETME_SUCCESS;
}

export class YetkiKaydetmeFailure implements Action {
    readonly type = YetkiActionTypes.YETKI_KAYDETME_FAILURE;

    constructor(public payload:Error){}
}

export class YetkiSilmeSuccess implements Action {
    readonly type = YetkiActionTypes.YETKI_SILME_SUCCESS;
}

export class YetkiSilmeFailure implements Action {
    readonly type = YetkiActionTypes.YETKI_SILME_FAILURE;

    constructor(public payload:Error){}
}*/

export class KullaniciHaricListeleriTemizle implements Action {
    readonly type = YetkiActionTypes.KULLANICI_HARICI_LISTELERI_TEMIZLE;
}



export type YetkiActions = KullaniciListelemeSuccess |
                            KullaniciListelemeFailure |
                            YetkiListelemeSuccess |
                            YetkiListelemeFailure |
                            YetkiHastaneDetayListelemeSuccess |
                            YetkiHastaneDetayListelemeFailure |
                            YetkiHizmetDetayListelemeSuccess |
                            YetkiHizmetDetayListelemeFailure |
                            KullaniciYetkiHastaneDetayListelemeSuccess |
                            KullaniciYetkiHastaneDetayListelemeFailure |
                            KullaniciYetkiHizmetDetayListelemeFailure |
                            KullaniciYetkiHizmetDetayListelemeSuccess |
                            ButunListeleriTemizle | 
                            KullaniciHaricListeleriTemizle 