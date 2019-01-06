import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { RootNavMiddleware } from '../navigators/AppNavigation';


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const middlewares = [];
  const enhancers = [];
  // logger
  // if (__DEV__) {
  //   const loggerMiddleware = createLogger({
  //     collapsed: (getState, action, logEntry) => !logEntry.error
  //   });
  //   middlewares.push(loggerMiddleware);
  // }
  middlewares.push(sagaMiddleware);
  middlewares.push(RootNavMiddleware);

  enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)));

  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
