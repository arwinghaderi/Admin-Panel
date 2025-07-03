import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './store/users'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})
