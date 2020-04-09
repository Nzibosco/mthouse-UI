import React from 'react'
import ReactDOM from 'react-dom';
import Jumbotron from '../../utils/jumbotron/Jumbotron'
import Form from '../../utils/form tools/Form'
import Label from '../../utils/form tools/Label'
import Input from '../../utils/form tools/Input'
import FormGroup from '../../utils/form tools/FormGroup'
import Button from '../../utils/form tools/Button'
import FormRow from '../../utils/form tools/FormRow'

interface IMemberProps {
    register: (member:any) => void,
    registerMessage: string
}

export class RegisterComponent extends React.Component<IMemberProps, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: 0,
            address: '',
            password: '',
            role: '',
            contribution: 0
           

        }
    }

    componentDidMount = () => {
       ReactDOM.render(<></>, document.getElementById('register-message'))
    }

    handleChange = (event:any) => {
          event.preventDefault();
          const {name, value} = event.target;
          this.setState({
            [name]: value
          })  
    }

    handleSelect = (event:any) => {
        this.setState({
            ...this.state,
            role: event.target.value
        })
    }

    handleSubmit = () => {

        let member = {
            first_name: this.state.fname,
            last_name: this.state.lname,
            email: this.state.email,
            phone: parseInt(this.state.phone),
            address: this.state.address,
            password: this.state.password,
            member_role: this.state.role,
            initial_contribution: parseInt(this.state.contribution)
        }; 

        this.props.register(member);

        // clearing the form after submit
        this.setState({
            ... this.state,
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            role: '',
            contribution: ''

        })

    }

    render() {

        let roles = ['Select role...', 'ADMIN', 'ACCOUNTANT', 'SECRETARY', 'PRESIDENT', 'SOCIAL', 'FINANCE', 'AUDITOR', 'LOAN', 'OPERATIONS', 'MEMBER']

        return (
            <div className = 'jumbotron'>
                <Jumbotron id = 'register-jumbotron'>
                    <h2>Enter your details below:</h2>

                    <Form>
                        <FormRow>
                        <FormGroup size='col-4'>
                        <Label name='First Name' inputId='fname' />
                        <Input
                            type='text'
                            id='fname'
                            placeholder='Enter first name'
                            name='fname'
                            value={this.state.fname}
                            handleChange= {this.handleChange}
                    
                        />
                        </FormGroup>

                        <FormGroup size='col-4'>
                        <Label name='Last Name' inputId='lname' />
                        <Input
                            type='text'
                            id='lname'
                            placeholder='Enter last name'
                            name='lname'
                            value= {this.state.lname}
                            handleChange= {this.handleChange}
                        />
                        </FormGroup>
                        

                        <FormGroup size='col-4'>
                        <Label name='Email' inputId='email' />
                        <Input
                            type='email'
                            id='email'
                            placeholder='Enter email'
                            name='email'
                            value= {this.state.email}
                            handleChange= {this.handleChange}
                            size=''
                        />
                        </FormGroup>
                        </FormRow>

                        <FormRow>
                        <FormGroup size='col-4'>
                        <Label name='Phone' inputId='phone' />
                        <Input
                            type='number'
                            id='phone'
                            placeholder='Enter phone number'
                            name='phone'
                            value = {this.state.phone}
                            handleChange= {this.handleChange}
                            size=''
                        />
                        </FormGroup>



                        <FormGroup size='col-4'>
                        <Label name='Password' inputId='password' />
                        <Input
                            type='password'
                            id='password'
                            placeholder='Choose a password'
                            name='password'
                            value={this.state.password}
                            handleChange= {this.handleChange}
                            size=''
                        />
                        </FormGroup>

                        <FormGroup size='col-4'>
                        <Label name='Address' inputId='address' />
                        <Input
                            type='text'
                            id='address'
                            placeholder='Enter your address'
                            name='address'
                            value= {this.state.address}
                            handleChange= {this.handleChange}
                            size=''
                        />
                        </FormGroup>
                        </FormRow>

                        <FormGroup>
                        <Label name='Select Role: ' inputId='role' />
                        <select id='role' onChange = {this.handleSelect}>
                            {roles.map(role => {
                                return (
                                    <option className = 'role' value={role}>{role}</option>
                                )
                            })}

                        </select>
                        </FormGroup>

                        <FormGroup>
                        <Label name='Initial Contribution' inputId='contrib' />
                        <Input
                            type='number'
                            id='contrib'
                            placeholder='Enter initial contribution'
                            name='contribution'
                            value = {this.state.contribution}
                            handleChange= {this.handleChange}
                            size='col-4'
                        />
                        </FormGroup>
                        
                        <Button 
                        btnName = 'Register' 
                        btnType = 'button' 
                        handleClick = {this.handleSubmit}
                        disabled= {!this.state.fname || !this.state.lname || !this.state.email || !this.state.phone || !this.state.password}
                        />
                    </Form>
                    <br/>
                    <h4 className = 'text-danger' id = 'register-message'>{this.props.registerMessage}</h4>
                </Jumbotron>
            </div>
        )
    }
}