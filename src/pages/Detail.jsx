import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/store";
import { auth } from "../firebase";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const datas = useSelector((state) => state.post);
  const selectedItem = datas.find((item) => item.id === id);

  const dispatch = useDispatch();

  const user = auth.currentUser;
  const isUserAuthor = user && user.email === selectedItem?.author;

  const handleDelete = () => {
    if (isUserAuthor) {
      const confirm = window.confirm("삭제하겠습니까?");
      if (confirm) {
        dispatch(deletePost(selectedItem.id));
        navigate("/");
      }
    } else {
      alert("해당 게시글을 삭제할 권한이 없습니다.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1
          style={{
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {selectedItem?.title}
        </h1>
        <div
          style={{
            height: "400px",
            border: "1px solid lightgray",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          {selectedItem?.content}
        </div>
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button
            onClick={() => {
              navigate(`/edit/${selectedItem.id}`);
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "orange",
              color: "white",
              cursor: "pointer",
              marginRight: "6px",
            }}
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "red",
              color: "white",
              cursor: "pointer",
            }}
          >
            삭제
          </button>
        </div>
      </Container>
    </>
  );
}
