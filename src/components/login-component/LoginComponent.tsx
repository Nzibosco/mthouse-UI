import React from 'react'
import Form from '../../utils/form tools/Form'
import FormGroup from '../../utils/form tools/FormGroup'
import Input from '../../utils/form tools/Input'
import Label from '../../utils/form tools/Label'
import Button from '../../utils/form tools/Button'
import MyModal from '../../utils/model/Modal'


const LoginForm = (props: any) => {
    return (
        <Form>
            <FormGroup>
                <Label name='Email' inputId='email' />
                <Input
                    id='email'
                    placeholder='enter your email'
                    type='text'
                    name='email'
                    value={props.emailValue}
                    handleChange={props.handleChange}

                />
            </FormGroup>

            <FormGroup>
                <Label name='Password' inputId='password' />
                <Input
                    id='password'
                    placeholder='enter your password'
                    type='password'
                    name='password'
                    value={props.passwordValue}
                    handleChange={props.handleChange}
                />
            </FormGroup>

            <Button
                btnName='Login'
                id='login-btn'
                btnType='button'
                handleClick={props.handleClick}
            />
            <p id = 'login-message'>{props.loginMessage}</p>
        </Form>
    )
}

const LoginModal = (props: any) => {
    return (
        <MyModal
            modalBtn='Sign in'
            title='Enter your credentials to login'
            body={<LoginForm
                emailValue={props.emailValue}
                passwordValue={props.passwordValue}
                handleChange={props.handleChange}
                handleClick={props.handleClick}
                loginMessage={props.loginMessage}
            />}
        />
    )
}

export default LoginModal;