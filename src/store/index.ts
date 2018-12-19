/*
 * @Author: lifan
 * @Date: 2018-12-12 09:46:29
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-14 13:47:15
 */
import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig: PersistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware  = createSagaMiddleware();

export default () => {
  let store: Store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      )
    )
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {
    store,
    persistor
  };
};