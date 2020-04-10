import { membersAPI } from "../utils/API/baseUrls"

export const membersTypes = {
    SUCCESS_GET_ALL_MEMBERS_SUCCESSFULL: 'SUCCESSFULL_GET_ALL_MEMBERS',
    FAIL_GET_ALL_MEMBERS_FAILED: 'FAILED_GET_ALL_MEMBERS'
}

export const getMembers = () => (dispatch:any) => {
    membersAPI.get('').then(res => {
        console.log(res)
        if (res.status === 200) {
            console.log(res.data);
            dispatch({
                type: membersTypes.SUCCESS_GET_ALL_MEMBERS_SUCCESSFULL,
                payload: {
                    membersMessage: 'Success fetching all members',
                    members: res.data
                }
            })
        } else {
            console.log(res);
            dispatch({
                type: membersTypes.FAIL_GET_ALL_MEMBERS_FAILED,
                payload: {
                    membersMessage: 'Fetching members failed. Try again later'
                }
            })

        }
    }).catch(err => {
        console.log('Register API failed');
        console.log(err);

        dispatch({
            type: membersTypes.FAIL_GET_ALL_MEMBERS_FAILED,
            payload: {
                membersMessage: 'Fetching members failed. Try again later'
            }
        })
    })
}