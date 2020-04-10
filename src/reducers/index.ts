import {combineReducers} from 'redux'
import { registrationReducer} from './registrationReducer'
import { loginReducer } from './loginReducer'
import { membersReducer } from './membersReducer'

export interface IRegisterState {
    registerMessage: string
}

export interface ILoginState {
    loginMessage: string,
    member: any
}

export interface IMembersState {
    members: any,
    membersMessage: string
}

export interface IState {
    registerState: IRegisterState,
    memberState: ILoginState,
    membersState: IMembersState
}

export const state = combineReducers<IState>({
    registerState: registrationReducer,
    memberState: loginReducer,
    membersState: membersReducer
})