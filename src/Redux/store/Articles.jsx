import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

export const getArticlesFromServer = createAsyncThunk(
  'getArticlesFromServer/articles',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
)

export const removeArticlesFromServer = createAsyncThunk(
  'removeArticlesFromServer/articles',
  async (id) => {
    const res = await fetch(
      `https://redux-cms.iran.liara.run/api/articles/${id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await res.json()
    return data
  }
)

export const createArticlesFromServer = createAsyncThunk(
  'articles/createUserFromServer',
  async (articlesData) => {
    const res = await fetch('https://redux-cms.iran.liara.run/api/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articlesData),
    })

    if (!res.ok) {
      throw new Error('خطا در ایجاد مقاله')
    }
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'موفق!',
        text: 'مقاله با موفقیت ثبت شد.',
        confirmButtonText: 'خیلی خب',
      })
    }

    const data = await res.json()
    return data
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.fulfilled, (_, action) => {
      return action.payload
    })

  

    builder.addCase(removeArticlesFromServer.fulfilled, (state, action) => {
      return state.filter((article) => article._id !== action.payload.id)
    })
  },
})

export default articlesSlice.reducer
