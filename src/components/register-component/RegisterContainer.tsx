import {connect} from 'react-redux'
import {IState} from '../../reducers/index'
import {register} from '../../action-mappers/register'
import { RegisterComponent } from './RegisterComponent'

const mapStateToProps = (state: IState) =>{
    return {
        registerMessage: state.registerState.registerMessage
    }
}

const mapDispatchToProps = {
    register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)