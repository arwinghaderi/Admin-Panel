import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

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

export const createCourseFromServer = createAsyncThunk(
  'course/createcourseFromServer',
  async (courseData) => {
    const res = await fetch('https://redux-cms.iran.liara.run/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    })

    if (!res.ok) {
      throw new Error('خطا در ایجاد  دوره')
    }
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'موفق!',
        text: 'دوره  با موفقیت ثبت شد.',
        confirmButtonText: 'خیلی خب',
      })
    }

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
