import React, { useState } from 'react';
import { Redirect, Router } from '@reach/router';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';

import './App.scss';

const App = () => {
  return (
    <>
      <div className="App">
        <Router primary={false}>
          <Admin path={LayoutPaths.Admin}>
            <ProtectedRoute path={Paths.Users} component={Pages.Users} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Users}`} />
          </Admin>

          <Auth path={LayoutPaths.Auth}>
            <AuthRoute path={Paths.Login} component={Pages.Login} />
            <AuthRoute path={Paths.LoginApp} component={Pages.LoginApp} />
            <PublicRoute path={Paths.Register} component={Pages.Register} />
            <PublicRoute path={Paths.ResetPassword} component={Pages.ResetPassword} />
            <PublicRoute path={Paths.CheckYourEmail} component={Pages.CheckYourEmail} />

            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
          </Auth>

          <PublicRoute path={Paths.ChangePassword} component={Pages.ChangePassword} />
          <PublicRoute path={Paths.GoogleCallback} component={Pages.GoogleCallback} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Users}`} />
        </Router>
      </div>
    </>
  );
};

export default App;
