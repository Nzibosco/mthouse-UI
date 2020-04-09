import { ILoginState, IState } from ".";
import {loginTypes} from '../action-mappers/login-action'

const initialState: ILoginState = {
    loginMessage: '',
    member: ''
}

export const loginReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case loginTypes.SUCCESS_LOGIN_SUCCESSFUL: {
            return {
                ...state,
                loginMessage: action.payload.loginMessage,
                member: action.payload.member
            }
        }

        case loginTypes.FAIL_LOGIN_FAILED: {
            return {
                ...state,
                loginMessage: action.payload.loginMessage
            }
        }

        default: 
        return state;
    }
}