import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  username: '',
  isLoggedIn: false,
  token: '',
  name: '',
  email: '',
  status: '',
  country: '',
  source: '',
  affiliate_url: '',
  comission_rate: 0,
  balance: null,
  paypal_email: '',
  user_image: ''

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        token, username, name,
        email,
        status,
        country,
        source,
        affiliate_url,
        comission_rate,
        balance,
        paypal_email,
        user_image
      } = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        token,
        username,
        name,
        email,
        status,
        country,
        source,
        affiliate_url,
        comission_rate,
        balance,
        paypal_email,
        user_image
      }
    },

    removeUser: (state) => {
      return {
        ...state,
        username: '',
        isLoggedIn: false,
        token: '',
      }
    }
  }
})

export const {setUser, removeUser} = userSlice.actions;

const userReducer = userSlice.reducer;

export default userSlice.reducer;