import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsersFromServer = createAsyncThunk(
  'users/getUsersFromServer',
  async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
)

export const removeUserFromServer = createAsyncThunk(
  'users/removeUserFromServer',
  async (id) => {
    const res = await fetch(
      `https://redux-cms.iran.liara.run/api/users/${id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await res.json()

    return data
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersFromServer.fulfilled, (_, action) => {
      return action.payload
    })

    builder.addCase(removeUserFromServer.fulfilled, (_, action) => {
      const newUser = state.filter((user) => user._id !== action.payload.id)

      return newUser
    })
  },
})

export default userSlice.reducer
