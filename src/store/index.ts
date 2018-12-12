/*
 * @Author: lifan
 * @Date: 2018-12-12 09:46:29
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-12 15:43:46
 */
import { createStore, compose } from 'redux';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const devTools: any = (<any>window).__REDUX_DEVTOOLS_EXTENSION__;
const persistConfig: PersistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    compose(
      devTools && devTools(),
    )
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor
  };
};
