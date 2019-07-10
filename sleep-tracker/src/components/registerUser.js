//register user with first/last name. username, password, email

import React, {Component} from 'react';
import axios from 'axios';

class login extends Component {
    
    state = {
       first_name: '',
       last_name: '',
       username: '',
       password: '',
       email: ''
    }

    handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // I think the endpoint is registration
        const endpoint = '/registration';

        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            // I am assuming this is the login endpoint
            this.props.history.push('/login')
        })
        .catch(err => {

            // I suspect this will be changed.  Don't want a user to see a console error
            console.log(err)
        })

        // reset the state after registration
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: ''
        })
    }
    render() {
        return(
           <React.Fragment>
                <form>
                    <div>
                        <label>First Name</label>
                        <input id="first_name" 
                               type="text" 
                               placeholder="first name"
                               value={this.state.first_name}
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input id="last_name" 
                               type="text" 
                               placeholder="last name"
                               value={this.state.last_name}
                               onChange={this.handleChange}/>
                               />
                    </div>
                    <div>
                        <label>Username</label>
                        <input id="username" 
                               type="text" 
                               placeholder="username"
                               value={this.state.username}
                               onChange={this.handleChange}/>
                               />
                    </div>
                    <div>
                        <label>Password</label>
                        <input id="password" 
                               type="password" 
                               placeholder="password"
                               value={this.state.password}
                               onChange={this.handleChange}/>/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input id="email" 
                               type="email" 
                               placeholder="email"
                               value={this.state.email}
                               onChange={this.handleChange}/>
                               />
                    </div>
                    <button type="submit">Submit</button>
                </form>

           </React.Fragment>
        )
    }
}



export default login;