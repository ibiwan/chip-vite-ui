import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useEffect } from 'react'

import {
  selectIsLoggedIn,
  reloadLogin,
} from 'state/user';

import { MenuBar } from 'component/MenuBar';

import {
  Login,
  Logout,
  CurrentUser,
} from 'component/Player';

import './App.css'

const App = observer(function AppInner() {
  useEffect(() => { reloadLogin() }, [])
  
  const loggedIn = selectIsLoggedIn()

  return (
    <div className="Layout">
      <div className="UtilityArea">
        <div className="LoginArea">
          {loggedIn ? <Logout /> : <Login />}
          {loggedIn && <CurrentUser />}
        </div>
        <div className="MenuBarArea">
          {loggedIn && <MenuBar />}
        </div>
      </div>
      <div className="ListArea">
        {loggedIn && <Outlet />}
      </div>
      <div className="DetailArea">
      </div>
    </div >
  );
})

export default App
