import React from 'react';

// Libs
import { Provider } from 'react-redux';
import { YellowBox, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

// Components
import Screens from './screens';

import configureStore from './redux/store';

const storeConfig = configureStore();

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    if (__DEV__) {
      YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <Screens />
        </PersistGate>
      </Provider>
    );
  }
}
