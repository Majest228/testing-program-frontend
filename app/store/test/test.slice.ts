import { getStoreLocal, removeTokensStorage } from "@/app/hooks/hooks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestion: 1 || localStorage.getItem("question")
};
export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload
            localStorage.setItem("question", JSON.stringify(state.currentQuestion))
        }
    },
});


export const testReducer = testSlice.reducer;


export const { setCurrentQuestion } = testSlice.actions
