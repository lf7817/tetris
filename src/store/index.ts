import { init, RematchRootState } from '@rematch/core'; // eslint-disable-line
import * as models from './models';

const isProduction = process.env.NODE_ENV === 'production';

const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: isProduction,
    },
  },
  plugins: [],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
export default store;
