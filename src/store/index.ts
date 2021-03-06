/*
 * @Author: lifan
 * @Date: 2018-12-12 09:46:29
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-10 16:01:28
 */
import { applyMiddleware, compose, createStore, Store } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const migrations = {
//   0: (state: State) => {
//     // migration clear out device state
//     return state;
//   },
//   1: (state: State) => {
//     // migration to keep only device state
//     return state;
//   }
// };
const persistConfig: PersistConfig = {
  key: "root",
  storage,
  version: 1,
  // migrate: createMigrate(migrations, { debug: true })
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store: Store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  // const persistor = persistStore(store);
  // persistor.pause();

  sagaMiddleware.run(rootSaga);

  return {
    store,
    // persistor
  };
};
