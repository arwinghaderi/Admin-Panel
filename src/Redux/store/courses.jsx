import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getingCoursesFromServer = createAsyncThunk(
  'getingCoursesFromServer/courses',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
)

export const removeCourseFromServer = createAsyncThunk(
  'removeCourseFromServer/courses',
  async (id) => {
    const res = await fetch(
      `https://redux-cms.iran.liara.run/api/courses/${id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await res.json()

    return data
  }
)

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getingCoursesFromServer.fulfilled,
      (_, action) => action.payload
    )

    builder.addCase(removeCourseFromServer.fulfilled, (state, action) => {
      const newCourses = state.filter(
        (course) => course?._id !== action?.payload?.id
      )
      return newCourses
    })
  },
})

export default coursesSlice.reducer
