import React from 'react'
import { IState } from '../../reducers'
import {login} from '../../action-mappers/login-action'
import { connect } from 'react-redux'
import { HomeComponent } from './HomeComponent'


const mapStateToProps =  (state:IState) => {
    return {
        loginMessage: state.memberState.loginMessage
    }  
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);