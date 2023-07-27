import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  // const addNewPost = (newPost) => {
  //   setData([...data, newPost]);
  // };

  // const updatePost = (id, updatedPost) => {
  //   setData((prevData) =>
  //     prevData.map((post) =>
  //       post.id === id ? { ...post, ...updatedPost } : post
  //     )
  //   );
  // };

  // const deletePost = (id) => {
  //   setData((prevData) => prevData.filter((post) => post.id !== id));
  // };

  const datas = useSelector((state) => state.post);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
