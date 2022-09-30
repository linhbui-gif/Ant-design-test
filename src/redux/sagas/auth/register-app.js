import { call, put } from 'redux-saga/effects';

import { registerAppAction } from '@/redux/actions';
import { registerApp } from '@/services/app';

// FUNCTION

export function* registerAppSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(registerApp, materials);
    const registerAppResponse = response;
    yield put(registerAppAction.success(registerAppResponse));
    successCallback?.(registerAppResponse);
  } catch (err) {
    yield put(registerAppAction.failure(err));
    failedCallback?.(err);
  }
}
