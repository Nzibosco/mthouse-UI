import {combineReducers} from 'redux'
import { registrationReducer} from './registrationReducer'
import { loginReducer } from './loginReducer'

export interface IRegisterState {
    registerMessage: string
}

export interface ILoginState {
    loginMessage: string,
    member: any
}

export interface IState {
    registerState: IRegisterState,
    memberState: ILoginState
}

export const state = combineReducers<IState>({
    registerState: registrationReducer,
    memberState: loginReducer
})