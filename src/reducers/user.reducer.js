import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  isLoggedIn: false,
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, username } = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        token,
        username,
      }
    },

    removeUser: (state) => {
      return {
        ...state,
        username: '',
        isLoggedIn: false,
        token: '',
        defaultAccessRight: [],
        userAccessPermissions: {}
      }
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userSlice.reducer;