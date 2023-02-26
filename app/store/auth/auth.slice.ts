import { getStoreLocal, removeTokensStorage } from "@/app/hooks/hooks";
import { createSlice } from "@reduxjs/toolkit";
import { getProfile, login, register } from "./auth.actions";
import cookie from 'js-cookie'
const initialState = {
  user: getStoreLocal("user"),
  isLoading: true,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => {
      return state
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('persist:root')
      cookie.remove('accessToken')
      cookie.remove('refreshToken')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      }).addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
      })

  },
});




export const authReducer = authSlice.reducer;


export const { getUser, logout } = authSlice.actions
