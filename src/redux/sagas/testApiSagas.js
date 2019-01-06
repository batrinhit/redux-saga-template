import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { TEST_API } from '../actions/actionTypes';

function* fetchTestApi(action) {
  try {
    const data = yield axios.get(action.url);
    yield put({ type: TEST_API.TEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: TEST_API.TEST_FAILURE, error });
  }
}

export default function* testApiSagas() {
  yield takeLatest(TEST_API.TEST_REQUEST, fetchTestApi);
}
