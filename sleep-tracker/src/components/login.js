//user login
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../store/actions/authorizations'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'

class Login extends Component {

    state = {
        creds: {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {

        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.login(this.state.creds)
        setTimeout(() => {
            this.props.history.push('/dashboard')
        }, 2000)
    }

    render() {
        return (
            <Container className='loginForm'>
                <h1>Sleep Tracker</h1>
                <Form onSubmit={this.handleSubmit} >
                    <h2>Login</h2>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text"
                            id="username"
                            placeholder="username"
                            onChange={this.handleChange}
                            value={this.state.creds.username}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password"
                            id="password"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.creds.password}
                        />
                    </FormGroup>
                    <Button onSubmit={this.handleSubmit}>Login</Button>
                    <FormGroup>
                        <Link to='/register'>Don't have an account, Sign up</Link>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = ({ loggingIn, authError, authMessage }) => ({
    authMessage,
    loggingIn,
    authError
})

export default connect(mapStateToProps, { login })(Login);
