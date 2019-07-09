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
      <Main/>
      <Route exact path='/' render={props => <Login{...props}/>} />
      <Route path='/create' render={props => <RegisterUser{...props}/>} />
      <UserRoute path='/dashboard' component={Main} />
     
   </div>

   );
}; 

export default App;
