import { TEST_API } from '../actions/actionTypes';

const initialState = {
  isLoading: undefined,
  data: undefined,
  error: undefined,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case TEST_API.TEST_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TEST_API.TEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    }
    case TEST_API.TEST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}
