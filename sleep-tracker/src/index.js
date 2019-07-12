import React from 'react';
import ReactDOM from 'react-dom';
// import jwt_decode from 'jwt-decode';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './store/reducers/index'

import './styles/index.sass';
import App from './App';


const devTool=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store=createStore(
    rootReducer,
    devTool(applyMiddleware(thunk,logger))
)

// ReactDOM.render(<App />, document.getElementById('root'));

const AppRouter=withRouter(App);

// is token set?
// if(localStorage, token) {
//     setToken(localStorage.token);
//     //grab user info with decoded token
//     const decodeToken=jwt_decode(localStorage.token);
//     //auth and sets user
//     store.dispatch(setCurrentUser(decodeToken));

//     //verify token is valid or nah
//     const zeroHour=Date.now()/1000;
//     if(decodeToken.exp <zeroHour) {
//         //then user logout
//         store.dispatch(userLogout());
//         window.location.href='/';
//     }
//  }

 ReactDOM.render(
     <Provider store={store}>
         <Router>
             {/* <App /> */}
             <AppRouter />

             {/* </AppRouter> */}
         </Router>
     </Provider>,
     document.getElementById('root')
 );

