import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "제목 1",
    content: "내용 1",
    author: "작성자 1",
  },
  {
    id: nanoid(),
    title: "제목 2",
    content: "내용 2",
    author: "작성자 2",
  },
  {
    id: nanoid(),
    title: "제목 3",
    content: "내용 3",
    author: "작성자 3",
  },
];

const data = createSlice({
  name: "data",
  initialState,
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

export const { addPost, deletePost, updatePost } = data.actions;
export default data;
