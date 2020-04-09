import React from 'react'
import Card from '../../utils/card/Card'
import { Link } from 'react-router-dom'
import LoginForm from '../login-component/LoginComponent'
import LoginModal from '../login-component/LoginComponent'

interface IHomeProps {
    loginMessage: string,
    login: (credentials:any) => void
}

export class HomeComponent extends React.Component<IHomeProps, any>{

    constructor(props:any){
        super(props)

        this.state = {
            email: '',
            passsword: ''
        }
    }

    handleChange = (event:any) => {
        event.preventDefault();

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let creds = {
            email: this.state.email,
            passsword: this.state.password
        }

        this.props.login(creds);

        // clear the form after submitting
        this.setState({
            ...this.state,
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div>
            <div className = 'row bg-dark' id = 'home-div'>
                <Card cardTitle = '' cardId = 'home-card' cardProperties = "text-center">
                    <h2>MT House Members Portal</h2>
                    <LoginModal
                    emailValue = {this.state.email}
                    passwordValue = {this.state.password}
                    handleChange = {this.handleChange}
                    handleClick = {this.handleSubmit}
                    loginMessage = {this.props.loginMessage}
                    />
                    <br/>
                    <p>No Account yet? Click <Link to= '/register'>here to register</Link></p>
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