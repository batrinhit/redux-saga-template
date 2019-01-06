import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';

export const RootNavigator = createAppContainer(createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    }
  }, {
    cardStyle: { shadowColor: 'transparent' }
  }
));
