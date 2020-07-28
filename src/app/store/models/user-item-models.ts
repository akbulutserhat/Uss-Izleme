export interface UserItem {
    session:Object;
    access_token:string;
    kullanici:{
        ID:string,
        TAM_ADI:string,
        GRUBU:string,
        ROLU:string
    }
}