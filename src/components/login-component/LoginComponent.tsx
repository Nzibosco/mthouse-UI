import React from 'react'
import Form from '../../utils/form tools/Form'
import FormGroup from '../../utils/form tools/FormGroup'
import Input from '../../utils/form tools/Input'
import Label from '../../utils/form tools/Label'
import Button from '../../utils/form tools/Button'


const LoginForm = (props:any) => {
    return (
        <Form>
            <FormGroup>
                <Label name = 'Email' inputId = 'email'/>
                <Input 
                required
                id = 'email'
                placeholder = 'enter your email'
                type = 'text'
                name = 'email'
                value = {props.emailValue}
                handleChange = {props.handleChange}

                />
            </FormGroup>

            <FormGroup>
                <Label name = 'Password' inputId = 'password'/>
                <Input
                required
                id = 'password'
                placeholder = 'enter your password'
                type = 'password'
                name = 'password'
                value = {props.passwordValue}
                handleChange = {props.handleChange}
                />
            </FormGroup>

            <Button
            btnName = 'Login'
            id = 'login-btn'
            btnType = 'button'
            handleClick = {props.handleClick}
            />
            <p>{props.loginMessage}</p>
        </Form>
    )
}

export default LoginForm;