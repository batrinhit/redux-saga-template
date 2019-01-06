import { TEST_API } from './actionTypes';
import { apiTest } from '../../apis';

export function testApiSuccess(response) {
  return {
    type: TEST_API.TEST_SUCCESS,
    response,
  };
}

export function testApiFailure(error) {
  return {
    type: TEST_API.TEST_FAILURE,
    error
  };
}

export function fetchTestApi() {
  return {
    type: TEST_API.TEST_REQUEST,
    url: apiTest
  };
}
