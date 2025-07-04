import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromServer.fulfilled, (_, action) => {
      return action.payload
    })

    builder.addCase(removeArticlesFromServer.fulfilled, (state, action) => {
      const newArticles = state.filter(
        (article) => article._id !== action.payload.id
      )

      return newArticles
    })
  },
})

export default articlesSlice.reducer
