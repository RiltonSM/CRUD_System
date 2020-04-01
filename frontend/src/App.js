import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import './global.css';

import CreateUser from './pages/CreateUser/';
import FindUser from './pages/FindUser/';
import UpdateUser from './pages/UpdateUser/';
import Header from './components/Header';

function App() {
  const [visibility, setVisibility] = useState(false);

  function ChangeVisibility(){
    setVisibility(!visibility);
  }

  useEffect(() => {
    if(visibility === false){
      document.body.style.background = "#ffffff";
    }else{
      document.body.style.background = "#404040";
     
    }
  }, [visibility])

  const styles = {};

  return (
    <div style={{width: '100%'}}>
      <BrowserRouter>
      <Header visibility={visibility} changeVisibility = {ChangeVisibility}/>
        <Switch>
          <Route path='/' render={() => <FindUser visibility={visibility}/>} exact/>
          <Route path='/create' render={() => <CreateUser visibility={visibility}/>}/>
          <Route path='/update' render={() => <UpdateUser visibility={visibility}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
