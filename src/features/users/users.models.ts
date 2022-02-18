import {Status} from "../utils";


export interface UserModel {
    id?:string
    email?: string
    email_verified_at?:string
    password?: string
    password_confirmation?:string



    type?:string
    idToken?:string
    phone_no?:string
    address?:string

    created_at?:string
    updated_at?:string



    name? :string
    role?:string
}

export interface UserState {
    authenticated: boolean,
    error:Error,
    token:string,

    loadingStatus:string,
    queryType:string

    //user related
    isAdmin:false,
    currentUser?: UserModel,
}

export interface ActionError{
    error:Error,
    queryType:string
}
