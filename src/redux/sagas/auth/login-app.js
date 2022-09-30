import { call, put } from 'redux-saga/effects';

import { loginAppAction } from '@/redux/actions';
import { loginApp } from '@/services/app';

// FUNCTION

export function* loginAppSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(loginApp, materials);
    const loginAppResponse = response;
    yield put(loginAppAction.success(loginAppResponse));
    successCallback?.(loginAppResponse);
  } catch (err) {
    yield put(loginAppAction.failure(err));
    failedCallback?.(err);
  }
}
