import { registerAPI } from '../utils/API/baseUrls';

export const registerTypes = {
    SUCCESS_REGISTRATION_SUCCESSFULL: 'SUCCESSFULL_REGISTRATION',
    FAIL_REGISTRATION_FAIL: 'FAILED_REGISTRATION'

}

export const register = (member: any) => async (dispatch: any) => {

    registerAPI.post('', member).then(res => {
        console.log(res)
        if (res.status === 200) {
            console.log(res.data);
            dispatch({
                type: registerTypes.SUCCESS_REGISTRATION_SUCCESSFULL,
                payload: {
                    registerMessage: 'Registration successfull. A committee member will approve your registration shortly'
                }
            })
        } else {
            console.log(res);
            dispatch({
                type: registerTypes.FAIL_REGISTRATION_FAIL,
                payload: {
                    registerMessage: 'Registration failed. Try again soon'
                }
            })

        }
    }).catch(err => {
        console.log('Register API failed');
        console.log(err);

        dispatch({
            type: registerTypes.FAIL_REGISTRATION_FAIL,
            payload: {
                registerMessage: 'Registration failed. Try again soon'
            }
        })
    })

}