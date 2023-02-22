import { getStoreLocal, removeTokensStorage } from "@/app/hooks/hooks";
import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";

const initialState = {
  currentQuestion: 1 || localStorage.getItem("question"),
  testing: {},
  selected: 1 || localStorage.getItem("selected"),
  questLength: 0,
};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
      localStorage.setItem("question", JSON.stringify(state.currentQuestion));
    },
    setTesting: (state, action) => {
      state.testing = action.payload;
      // cookie.set("testing", JSON.stringify(state.testing), { secure: true });
      localStorage.setItem("testing", JSON.stringify(state.testing));
    },
    setSelectedId: (state, action) => {
      state.selected[action.payload.id] = action.payload.select;
      // cookie.set("selected", JSON.stringify(state.selected), { secure: true });
      // cookie.set("selected", JSON.stringify(state.selected));
      localStorage.setItem("selected", JSON.stringify(state.selected));
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
      localStorage.setItem("selected", JSON.stringify(state.selected));
      // cookie.set("selected", JSON.stringify(state.selected), { secure: true });
      localStorage.setItem("selected", JSON.stringify(state.selected));
    },
  },
});

export const testReducer = testSlice.reducer;

export const { setCurrentQuestion, setTesting, setSelected, setSelectedId } =
  testSlice.actions;
