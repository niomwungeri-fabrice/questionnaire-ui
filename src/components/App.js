import React from 'react';
import { Route, Switch } from "react-router-dom";
import  SignIn from '../views/SignIn'
import  SignUp  from '../views/SignUp'
import Landing from '../views/Landing'

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
