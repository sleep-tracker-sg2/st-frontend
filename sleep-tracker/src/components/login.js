//user login
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../store/actions/authorizations'

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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.creds)
        alert(this.state.creds)
        // I'm guessing on this endpoint
        // this.props.history.push('/dashboard')
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            id="username"
                            placeholder="username"
                            onChange={this.handleChange}
                            value={this.state.creds.username}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            id="password"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.creds.password}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ loggingIn, authError, authMessage }) => ({
    authMessage,
    loggingIn,
    authError
})

export default connect(mapStateToProps, { login })(Login);
