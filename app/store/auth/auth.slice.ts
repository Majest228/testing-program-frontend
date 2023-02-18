import { getStoreLocal, removeTokensStorage } from "@/app/hooks/hooks";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.actions";

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
      removeTokensStorage()
      localStorage.removeItem('user')
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
      })
  },
});




export const authReducer = authSlice.reducer;


export const { getUser, logout } = authSlice.actions
