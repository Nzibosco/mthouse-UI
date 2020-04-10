import { IState } from "../../reducers";
import { connect } from "react-redux";
import { MembersComponent } from "./MembersComponent";
import {getMembers} from '../../action-mappers/members-action';


const mapStateToProps = (state:IState) => {
    return {
        // this will be revised to grab the members object instead of one member.
        members: state.membersState.members,
        membersMessage: state.membersState.membersMessage
    }
}

const mapDispatchToProps = {
    getMembers
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersComponent);