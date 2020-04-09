import {IRegisterState} from '.'
import {registerTypes} from '../action-mappers/register'


const initialState: IRegisterState = {
    registerMessage: ''
}

export const registrationReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case registerTypes.SUCCESS_REGISTRATION_SUCCESSFULL: {
            return {
                ... state,
                registerMessage: action.payload.registerMessage
            }
        }

        case registerTypes.FAIL_REGISTRATION_FAIL: {
            return {
                ... state,
                registerMessage: action.payload.registerMessage
            }
        }

        default:
            return state;
    }
}