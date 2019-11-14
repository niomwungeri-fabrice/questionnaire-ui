import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Home from '../views/Home';
import CreateMeetup from '../views/CreateMeetup';

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/create" component={CreateMeetup} />
      </Switch>
    </div>
  );
};

export default App;
