import React from 'react'
import Card from '../../utils/card/Card'
import MyModal from '../../utils/model/Modal'
import { Link } from 'react-router-dom'
import LoginForm from '../login-component/LoginComponent'
import Button from '../../utils/form tools/Button'


export class HomeComponent extends React.Component<any, any>{

    render(){
        return(
            <div>
            <div className = 'row bg-dark' id = 'home-div'>
                <Card cardTitle = '' cardId = 'home-card' cardProperties = "text-center">
                    <h2>MT House Members Portal</h2>
                    <MyModal
                    modalBtn = 'Sign in'
                    title = 'Enter your credentials to login'
                    body = {<LoginForm/>}
                    />
                    <br/>
                    <small>No Account yet? </small> <br/>
                    <Link to= '/register'><Button btnName = 'Register'/></Link>
                    <br/>
                    <small style = {{fontStyle: "italic", color: "red"}}>This portal is for MT House authorized members only. Illegal access would amount to legal actions</small>
                </Card>
            </div>
            <br/>
            <br/><br/> <br/> <br/>
            <div className = "footer text-center" style = {{}}>
                <small>Application developed by: ....</small>
                <small><a target = "_blank" href = "https://bosconzeyi.com"> &copy; Bosco Nzeyi</a></small>
                <p>All rights reserved</p>
            </div>
            </div>
        )
    }
}