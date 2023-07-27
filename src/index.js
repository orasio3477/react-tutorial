import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

let data = createSlice({
  name: "post",
  initialState: [
    {
      id: 1,
      title: "제목 1",
      content: "내용 1",
      author: "작성자 1",
    },
    {
      id: 2,
      title: "제목 2",
      content: "내용 2",
      author: "작성자 2",
    },
    {
      id: 3,
      title: "제목 3",
      content: "내용 3",
      author: "작성자 3",
    },
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    post: data.reducer,
  },
});

export const { addPost, deletePost, updatePost } = data.actions;
export default data.reducer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
