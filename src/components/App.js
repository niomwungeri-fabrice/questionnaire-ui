import React from 'react';
import { Route, Switch } from "react-router-dom";
import  SignIn from '../views/SignIn'
import  SignUp  from '../views/SignUp'
import Landing from '../views/Landing'
import Home from '../views/Home'
import CreateMeetup from '../views/CreateMeetup'


export const App = () =>{
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/home" component={Home}/>
          <Route path="/create" component={CreateMeetup}/>
      </Switch>
    </div>
  );
}

export default App;
