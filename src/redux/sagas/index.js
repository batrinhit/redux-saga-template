import { fork, all } from 'redux-saga/effects';
import navigator from './navigator';
import testApiSagas from './testApiSagas';

export default function* rootSaga() {
  yield all([
    fork(navigator),
    fork(testApiSagas)
  ]);
}
