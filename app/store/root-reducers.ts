import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.slice";
import { testReducer } from "./test/test.slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer
});
