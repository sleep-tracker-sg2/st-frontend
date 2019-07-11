//register user with first/last name. username, password, emailimport React, {Component} from 'react';
import React, { Component } from 'react';
import { register } from '../store/actions/authorizations'
import { connect } from 'react-redux'

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
        this.props.register(this.state.newUser)
        if(this.props.authError == 'SIGNUP_FAIL') {
            alert(this.props.authMessage)
        } else {
            alert(`${this.state.newUser.first_name}, you were successfully register`)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input id="first_name"
                            type="text"
                            placeholder="first name"
                            value={this.state.newUser.first_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input id="last_name"
                            type="text"
                            placeholder="last name"
                            value={this.state.newUser.last_name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Username</label>
                        <input id="username"
                            type="text"
                            placeholder="username"
                            value={this.state.newUser.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input id="password"
                            type="password"
                            placeholder="password"
                            value={this.state.newUser.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                            <label>Email</label>
                            <input id="email"
                                type="email"
                                placeholder="email"
                                value={this.state.newUser.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit">Submit</button>
                </form>

           </React.Fragment>
                )
            }
        }
        
const mapStateToProps = ({signingUp, authError, authMessage}) => ({
    signingUp,
    authError,
    authMessage
})

export default connect(mapStateToProps, {register} )(RegisterUser);