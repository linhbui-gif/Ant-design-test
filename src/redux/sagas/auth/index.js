import { all, takeLatest } from 'redux-saga/effects';

import { googleLoginAction, loginAppAction, loginAction, registerAppAction } from '@/redux/actions';

import { googleLoginSaga } from './google-login';
import { loginAppSaga } from './login-app';
import { loginSaga } from './login';
import { registerAppSaga } from './register-app';

export default function* root() {
  yield all([
    takeLatest(googleLoginAction.request.type, googleLoginSaga),
    takeLatest(loginAppAction.request.type, loginAppSaga),
    takeLatest(loginAction.request.type, loginSaga),
    takeLatest(registerAppAction.request.type, registerAppSaga),
  ]);
}
