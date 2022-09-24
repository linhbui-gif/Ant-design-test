import React, { useState } from 'react';
import { Redirect, Router } from '@reach/router';
import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import './App.scss';
import Admin from './layouts/Admin';

const App = () => {
  return (
    <>
      <div className="App">
        <Router primary={false}>
          <Admin path={LayoutPaths.Admin}>
            <PublicRoute path={Paths.User} component={Pages.UserManagement} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.User}`} />
          </Admin>
        </Router>
      </div>
    </>
  );
};

export default App;
