import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getArticlesFromServer = createAsyncThunk(
  'getArticlesFromServer/articles',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getArticlesFromServer.fulfilled]: (_, action) => {
      return action.payload
    },
  },
})

export default articlesSlice.reducer
