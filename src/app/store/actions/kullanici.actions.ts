import { Action } from '@ngrx/store'
import { KullaniciListelemeFailure } from './yetki.actions';
import { KullaniciItem } from '../models/kullanici-item.models';

export enum KullaniciActionsTypes  {
    KULLANICI_LISTELE_SUCCESS = '[KULLANICI] KULLANICI LISTELE SUCCESS',
    KULLANICI_LISTELE_FAILURE = '[KULLANICI] KULLANICI LISTELE FAILURE',
    GRUP_LISTELE_SUCCESS = '[KULLANICI] GRUP LISTELE SUCCESS',
    GRUP_LISTELE_FAILURE = '[KULLANICI] GRUP LISTELE FAILURE',
    GRUBA_GORE_KULLANICI_LISTELE_SUCCESS = '[KULLANICI] GRUBA GORE KULLANICI LISTELE SUCCESS',
    GRUBA_GORE_KULLANICI_LISTELE_FAILURE = '[KULLANICI] GRUBA GORE KULLANICI LISTELE FAILURE',
    KULLANICIYA_GORE_GRUP_LISTELE_SUCCESS = '[KULLANICI] KULLANICIYA GORE GRUP LISTELE SUCCESS',
    KULLANICIYA_GORE_GRUP_LISTELE_FAILURE = '[KULLANICI] KULLANICIYA GORE GRUP LISTELE FAILURE',
    KULLANICI_EKLE_SUCCESS = '[KULLANICI] KULLANICI EKLE SUCCESS',
    KULLANICI_EKLE_FAILURE = '[KULLANICI] KULLANICI EKLE FAILURE',
    GRUP_EKLE_SUCCESS = '[KULLANICI] GRUP EKLE SUCCESS',
    GRUP_EKLE_FAILURE = '[KULLANICI] GRUP EKLE FAILURE',
    KULLANICIYA_GRUP_EKLE_SUCCESS = '[KULLANICI] KULLANICIYA GRUP EKLE SUCCESS',
    KULLANICIYA_GRUP_EKLE_FAILURE = '[KULLANICI] KULLANICIYA GRUP EKLE FAILURE',
    KULLANICIDAN_GRUP_SIL_SUCCESS = '[KULLANICI] KULLANICIDAN GRUP SİL SUCCESS',
    KULLANICIDAN_GRUP_SIL_FAILURE = '[KULLANICI] KULLANICIDAN GRUP SİL FAILURE',
    KULLANICI_SIL_SUCCESS = '[KULLANICI] KULLANICI SIL SUCCESS',
    KULLANICI_SIL_FAILURE = '[KULLANICI] KULLANICI SIL FAILURE',
    GRUP_SIL_SUCCESS = '[KULLANICI] GRUP SIL SUCCESS',
    GRUP_SIL_FAILURE = '[KULLANICI] GRUP SIL FAILURE',
    GRUBA_KULLANICI_EKLE_SUCCESS = '[KULLANICI] GRUBA KULLANICI EKLE SUCCESS',
    GRUBA_KULLANICI_EKLE_FAILURE = '[KULLANICI] GRUBA KULLANICI EKLE FAILURE',
    GRUPTAN_KULLANICI_SIL_SUCCESS = '[KULLANICI] GRUPTAN KULLANICI SIL SUCCESS',
    GRUPTAN_KULLANICI_SIL_FAILURE = '[KULLANICI] GRUPTAN KULLANICI SIL FAILURE'
}

export class KullaniciListeleSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_LISTELE_SUCCESS;

    constructor(public payload:any){}
}

export class KullaniciListeleFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_LISTELE_FAILURE;

    constructor(public payload:Error){}
}

export class GrupListeleSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUP_LISTELE_SUCCESS;

    constructor(public payload:any){}
}

export class GrupListeleFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUP_LISTELE_FAILURE;

    constructor(public payload:Error){}
}

export class GrubaGoreKullaniciListeleSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUBA_GORE_KULLANICI_LISTELE_SUCCESS;

    constructor(public payload:any){}
}

export class GrubaGoreKullaniciListeleFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUBA_GORE_KULLANICI_LISTELE_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciyaGoreGrupListeleSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIYA_GORE_GRUP_LISTELE_SUCCESS;

    constructor(public payload:any){}
}

export class KullaniciyaGoreGrupListeleFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIYA_GORE_GRUP_LISTELE_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciEkleSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_EKLE_SUCCESS;

    constructor(public payload:any){}
}

export class KullaniciEkleFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_EKLE_FAILURE;

    constructor(public payload:Error){}
}

export class GrupEkleSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUP_EKLE_SUCCESS;

    constructor(public payload:any){}
}

export class GrupEkleFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUP_EKLE_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciSilSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_SIL_SUCCESS;

    constructor(public payload:any){}
}

export class KullaniciSilFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICI_SIL_FAILURE;

    constructor(public payload:Error){}
}

export class GrupSilSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUP_SIL_SUCCESS;

    constructor(public payload:any){}
}

export class GrupSilFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUP_SIL_FAILURE;

    constructor(public payload:Error){}
}

export class KullaniciyaGrupEkleSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIYA_GRUP_EKLE_SUCCESS;

    constructor(public payload:any){}
}

export class KullaniciyaGrupEkleFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIYA_GRUP_EKLE_FAILURE;

    constructor(public payload:Error){}
}

export class KullanicidanGrupSilSuccess implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIDAN_GRUP_SIL_SUCCESS;

    constructor(public payload:any){}
}

export class KullanicidanGrupSilFailure implements Action {
    readonly type = KullaniciActionsTypes.KULLANICIDAN_GRUP_SIL_FAILURE;

    constructor(public payload:Error){}
}

export class GrubaKullaniciEkleSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUBA_KULLANICI_EKLE_SUCCESS;

    constructor(public payload:any){}
}

export class GrubaKullaniciEkleFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUBA_KULLANICI_EKLE_FAILURE;

    constructor(public payload:Error){}
}

export class GruptanKullaniciSilSuccess implements Action {
    readonly type = KullaniciActionsTypes.GRUPTAN_KULLANICI_SIL_SUCCESS;

    constructor(public payload:any){}
}

export class GruptanKullaniciSilFailure implements Action {
    readonly type = KullaniciActionsTypes.GRUPTAN_KULLANICI_SIL_FAILURE;

    constructor(public payload:Error){}
}

export type KullaniciActions = GrubaGoreKullaniciListeleSuccess |
                                GrubaGoreKullaniciListeleFailure |
                                KullaniciyaGoreGrupListeleSuccess |
                                KullaniciyaGoreGrupListeleFailure |
                                GrupEkleSuccess |
                                GrupEkleFailure |
                                GrupSilSuccess |
                                GrupSilFailure |
                                KullaniciEkleSuccess |
                                KullaniciEkleFailure |
                                KullaniciSilSuccess |
                                KullaniciSilFailure |
                                KullanicidanGrupSilSuccess |
                                KullanicidanGrupSilFailure |
                                KullaniciyaGrupEkleSuccess |
                                KullaniciyaGrupEkleFailure |
                                KullaniciListeleSuccess |
                                KullaniciListeleFailure |
                                GrupListeleSuccess |
                                GrupListeleFailure |
                                GrubaKullaniciEkleSuccess |
                                GrubaKullaniciEkleFailure |
                                GruptanKullaniciSilSuccess |
                                GruptanKullaniciSilFailure


