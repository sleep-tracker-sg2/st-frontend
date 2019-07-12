//register user with first/last name. username, password, emailimport React, {Component} from 'react';
import React, { Component } from 'react';
import { register } from '../store/actions/authorizations'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'


class RegisterUser extends Component {

    state = {
        newUser: {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newUser)
        this.props.register(this.state.newUser)
        if(this.props.authStatus == 'SIGNUP_FAIL') {
            alert(this.props.authMessage)
        } 
        if(this.props.authStatus == 'SIGNUP_SUCCESS'){
            alert(`${this.state.newUser.first_name}, you were successfully register`)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <Container className='registerForm'>
                <h1>Sleep Track</h1>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input id="first_name"
                            type="text"
                            placeholder="first name"
                            value={this.state.newUser.first_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input id="last_name"
                            type="text"
                            placeholder="last name"
                            value={this.state.newUser.last_name}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input id="username"
                            type="text"
                            placeholder="username"
                            value={this.state.newUser.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input id="password"
                            type="password"
                            placeholder="password"
                            value={this.state.newUser.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                            <Label>Email</Label>
                            <Input id="email"
                                type="email"
                                placeholder="email"
                                value={this.state.newUser.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button type="submit">Sign Up</Button>
                </Form>

           </Container>
                )
            }
        }
        
const mapStateToProps = ({signingUp, authStatus, authMessage}) => ({
    signingUp,
    authStatus,
    authMessage
})

export default connect(mapStateToProps, {register} )(RegisterUser);