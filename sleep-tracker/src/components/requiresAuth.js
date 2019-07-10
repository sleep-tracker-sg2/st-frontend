// This is aother requires authorization we used in class.  Applicable here?  If not, del it


import React from 'react';
import axios from 'axios';

// I'm assuming this port would be differet
axios.defaults.baseURL = 'http://localhost:5005'
axios.interceptors.request.use(options => {
    options.headers.authorization = localStorage.jwt;
    return options
}, err => {
    return Promise.reject(err)
})

export default function(Component){
    return class Authenticated extends React.Component {
        render() {
            const jwt = localStorage.jwt
            const logMessage = <div>Please login to see content</div>
            return (
                <React.Fragment>
                    {jwt ? <Component {...this.props} /> : logMessage}
                </React.Fragment>
            )
        }
    }
}

