import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateUser from './pages/CreateUser';
import FindUser from './pages/FindUser';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={FindUser} exact/>
        <Route path='/create' component={CreateUser}/>
        <Route path='/update' component={UpdateUser}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
