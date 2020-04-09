import {combineReducers} from 'redux'
import { registrationReducer} from './registrationReducer'

export interface IRegisterState {
    registerMessage: string
}

export interface IState {
    registerState: IRegisterState
}

export const state = combineReducers<IState>({
    registerState: registrationReducer
})