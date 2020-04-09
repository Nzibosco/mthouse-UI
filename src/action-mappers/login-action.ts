import { registerAPI } from "../utils/API/baseUrls"

export const loginTypes = {
    SUCCESS_LOGIN_SUCCESSFUL: 'SUCCESSFULL_LOGIN',
    FAIL_LOGIN_FAILED: 'FAILED_LOGIN'
}

// we can use the register API to login 

export const login = (creds:any) => async (dispatch:any) => {
    registerAPI.post('/login', creds).then(res => {
        if(res.status === 200){
            console.log(res.data);
            
            dispatch({
                type: loginTypes.SUCCESS_LOGIN_SUCCESSFUL,
                payload: {
                    loginMessage: 'Login successfull. Continue',
                    member: res.data
                }
            })
        } else {
            dispatch({
                type: loginTypes.FAIL_LOGIN_FAILED,
                payload: {
                    loginMessage: 'Login failed. Please try again later',
                }
            })
        }
    }).catch(err => {
        console.log(err);
        
        dispatch({
            type: loginTypes.FAIL_LOGIN_FAILED,
            payload: {
                loginMessage: 'Login failed. Please try again later',
            }
        })
    })
}

