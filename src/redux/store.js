import { configureStore } from "@reduxjs/toolkit";
import data from "./data";

const store = configureStore({
  reducer: {
    post: data.reducer,
  },
});

export const { addPost, deletePost, updatePost } = data.actions;
export default store;
