import { configureStore, combineReducers } from '@reduxjs/toolkit'
import TodoReducer from '../features/TodoState'
import storage from 'redux-persist/lib/storage' 
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  Todo: TodoReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //To show off A non-serializable value was detected in an action,
      },
    }),
})