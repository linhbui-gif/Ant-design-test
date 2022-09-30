import { call, put } from 'redux-saga/effects';

import { googleLoginAction } from '@/redux/actions';
import { googleLogin } from '@/services/app';

// FUNCTION

export function* googleLoginSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(googleLogin, materials);
    const googleLoginResponse = response;
    yield put(googleLoginAction.success(googleLoginResponse));
    successCallback?.(googleLoginResponse);
  } catch (err) {
    yield put(googleLoginAction.failure(err));
    failedCallback?.(err);
  }
}
