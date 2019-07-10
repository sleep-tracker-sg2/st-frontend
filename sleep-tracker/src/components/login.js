//user login
import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.prevent.default();
        // I think this is the endpoint
        const endpoint = '/login';

        axios.post(endpoint, this.state)
        .then(res => {

            localStorage.setItem('jwt', res.data.token);

            // I'm guessing on this endpoint
            this.props.history.push('/user/:id')
        })
        .catch( err => {

            // may want to change this
            console.log(err)
        })
    }

    render(){
        return(
            <React.Fragment>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" 
                               id="username"
                               placeholder="username"
                               onChange={this.handleChange}
                               value={this.state.username}
                               />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" 
                               id="password"
                               placeholder="password"
                               onChange={this.handleChange}
                               value={this.state.username}
                               />
                    </div>
                <button>Submit</button>
                </form>
            </React.Fragment>
        ) 
    }
}


export default Login;