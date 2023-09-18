import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/user";
import { searchReducer } from "./Reducers/search";
import { courseReducer } from "./Reducers/course";
const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    course: courseReducer
  },
});
export default store;
