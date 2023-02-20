import { getStoreLocal, removeTokensStorage } from "@/app/hooks/hooks";
import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie";

const initialState = {
  currentQuestion: 1 || localStorage.getItem("question"),
  testing: {},
  selected: {},
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
      cookie.set("testing", JSON.stringify(state.testing), { secure: true });
    },
    setSelectedId: (state, action) => {
      state.selected[action.payload.id][1] = action.payload.select;
      cookie.set("selected", JSON.stringify(state.selected), { secure: true });
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
      cookie.set("selected", JSON.stringify(state.selected), { secure: true });
    },
  },
});

export const testReducer = testSlice.reducer;

export const { setCurrentQuestion, setTesting, setSelected, setSelectedId } =
  testSlice.actions;
