import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsersFromServer = createAsyncThunk(
  'users/getUsersFromServer',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUsersFromServer.fulfilled]: (_, action) => {
      return action.payload
    },
  },
})

export default userSlice.reducer
