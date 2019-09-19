import React from 'react';
import SignUp from './views/SignUp'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <SignUp/>
   </Provider>
  );
}

export default App;
