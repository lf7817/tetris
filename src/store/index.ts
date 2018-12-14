/*
 * @Author: lifan
 * @Date: 2018-12-12 09:46:29
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-14 13:47:15
 */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';


const devTools: any = (<any>window).__REDUX_DEVTOOLS_EXTENSION__;
const persistConfig: PersistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware  = createSagaMiddleware();

export default () => {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(
        sagaMiddleware,
      ),
      devTools && devTools(), // 这里演示用，生产模式不禁用
    )
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return {
    store,
    persistor
  };
};
