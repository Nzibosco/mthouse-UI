import { IMembersState } from ".";
import { membersTypes } from "../action-mappers/members-action";

const initialState:IMembersState = {
    members: [],
    membersMessage: ''
}

export const membersReducer = (state = initialState, action:any) => {

    switch(action.type){
        case membersTypes.SUCCESS_GET_ALL_MEMBERS_SUCCESSFULL: {
            return {
                ... state,
                members: action.payload.members,
                membersMessage: action.payload.membersMessage
            }
        }

        case membersTypes.FAIL_GET_ALL_MEMBERS_FAILED: {
            return {
                ...state,
                membersMessage: action.payload.membersMessage
            }
        }

        default: 
        return state;
    }
}