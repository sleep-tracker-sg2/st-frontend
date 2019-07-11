import React from 'react';
import {Route} from 'react-router-dom';
import RegisterUser from './components/registerUser.js';
import Login from './components/login.js';
import Main from './components/dashboard/main.js';
//import UserRoute from './components/dashboard/userRoute.js';
//import SleepActions from './components/dashboard/sleepActions.js';

const App=()=> {
  return ( 
    <div>
      <Route exact path='/' render={props => <Login{...props}/>} />
      <Route path='/register' render={props => <RegisterUser{...props}/>} />
      <Route path='/dashboard' component={Main} />
     
   </div>

   );
}; 

export default App;
