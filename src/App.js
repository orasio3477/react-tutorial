import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [Data, setData] = useState([
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
  ]);

  const addNewPost = (newPost) => {
    setData([...Data, newPost]);
  };

  const updatePost = (id, updatedPost) => {
    setData((prevData) =>
      prevData.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      )
    );
  };

  const deletePost = (id) => {
    setData((prevData) => prevData.filter((post) => post.id !== id));
  };

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route
        path="/"
        element={
          <Main Data={Data} addPost={addNewPost} deletePost={deletePost} />
        }
      />
      <Route
        path="/detail/:id"
        element={<Detail Data={Data} deletePost={deletePost} />}
      />
      <Route path="/create" element={<Create addPost={addNewPost} />} />
      <Route
        path="/edit/:id"
        element={<Edit Data={Data} updatePost={updatePost} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
