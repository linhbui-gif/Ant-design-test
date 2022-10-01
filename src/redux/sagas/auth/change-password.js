import { call, put } from 'redux-saga/effects';

import { changePasswordAction } from '@/redux/actions';
import { changePassword } from '@/services/app';

// FUNCTION

export function* changePasswordSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(changePassword, materials);
    const changePasswordResponse = response;
    yield put(changePasswordAction.success(changePasswordResponse));
    successCallback?.(changePasswordResponse);
  } catch (err) {
    yield put(changePasswordAction.failure(err));
    failedCallback?.(err);
  }
}
