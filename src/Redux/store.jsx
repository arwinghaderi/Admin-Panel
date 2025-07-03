import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './store/users'
import coursesReducer from './store/courses'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
  },
})
