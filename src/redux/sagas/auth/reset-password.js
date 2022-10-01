import { call, put } from 'redux-saga/effects';

import { resetPasswordAction } from '@/redux/actions';
import { resetPassword } from '@/services/app';

// FUNCTION

export function* resetPasswordSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(resetPassword, materials);
    const resetPasswordResponse = response;
    yield put(resetPasswordAction.success(resetPasswordResponse));
    successCallback?.(resetPasswordResponse);
  } catch (err) {
    yield put(resetPasswordAction.failure(err));
    failedCallback?.(err);
  }
}
