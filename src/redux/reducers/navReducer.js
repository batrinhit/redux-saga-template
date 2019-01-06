import { RootNavigator } from '../../navigators/RootNavigator';
import { NAVIGATION } from '../actions/actionTypes';

const initialNavState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('HomeScreen')
);

export default function rootNav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case NAVIGATION.LOGIN_SCREEN:
      nextState = RootNavigator.router.getStateForAction(
        RootNavigator.router.getActionForPathAndParams('HomeScreen'),
        state
      );
      break;
    // case NAVIGATION.ROOT_NAV_BACK:
    //   nextState = RootNavigator.router.getStateForAction(StackActions.pop(), state);
    //   break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
