import { persistReducer } from 'redux-persist';
import { AnyAction, Reducer } from 'redux';

import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer): Reducer<any, AnyAction> => {
  const persistedReducer = persistReducer(
    {
      key: '@MENTORANDO',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducer;
};
