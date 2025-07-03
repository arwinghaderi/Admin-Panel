import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getingCoursesFromServer = createAsyncThunk(
  'getingCoursesFromServer/courses',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
)

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getingCoursesFromServer.fulfilled]: (_, action) => {
      return action.payload
    },
  },
})

export default coursesSlice.reducer
