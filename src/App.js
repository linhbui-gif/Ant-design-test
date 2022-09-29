import React, { useState } from 'react';
import { Redirect, Router } from '@reach/router';

import { AuthRoute, LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';

import './App.scss';

const App = () => {
  return (
    <>
      <div className="App">
        <Router primary={false}>
          <Admin path={LayoutPaths.Admin}>
            <PublicRoute path={Paths.Users} component={Pages.Users} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Users}`} />
          </Admin>

          <Auth path={LayoutPaths.Auth}>
            <AuthRoute path={Paths.Login} component={Pages.Login} />
            <PublicRoute path={Paths.Register} component={Pages.Register} />
            <PublicRoute path={Paths.ResetPassword} component={Pages.ResetPassword} />
            <PublicRoute path={Paths.CheckYourEmail} component={Pages.CheckYourEmail} />
            <PublicRoute path={Paths.ChangePassword} component={Pages.ChangePassword} />

            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
          </Auth>

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Users}`} />
        </Router>
      </div>
    </>
  );
};

export default App;
