import React from 'react'
import { Navigate } from 'react-router-dom'

import Users from './pages/Users/Users'
import Courses from './pages/Courses/Courses'
import Articles from './pages/Articles/Articles'

export default [
  { path: '/', element: <Navigate to="/users" replace /> },
  { path: '/users', element: <Users /> },
  { path: '/courses', element: <Courses /> },
  { path: '/articles', element: <Articles /> },
]
