import { createReducer } from 'deox';

import { googleLoginAction, loginAppAction, loginAction, registerAppAction } from '@/redux/actions';
import { googleLoginUpdateState } from './google-login';
import { loginAppUpdateState } from './login-app';
import { loginUpdateState } from './login';
import { registerAppUpdateState } from './register-app';

const initialState = {
  googleLoginResponse: undefined,
  loginAppResponse: undefined,
  loginResponse: undefined,
  registerAppResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(googleLoginAction.success, googleLoginUpdateState),
  handleAction(loginAppAction.success, loginAppUpdateState),
  handleAction(loginAction.success, loginUpdateState),
  handleAction(registerAppAction.success, registerAppUpdateState),
]);

export default AuthReducer;
