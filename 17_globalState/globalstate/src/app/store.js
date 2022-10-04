import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../features/TodoState'

export const store = configureStore({
  reducer: TodoReducer,
})