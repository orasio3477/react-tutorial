import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/store";
import { auth } from "../firebase";

export default function Main() {
  const navigate = useNavigate();

  const datas = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const user = auth.currentUser;

  console.log(user);

  const handleAdd = () => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    navigate("/create");
  };

  const handleDelete = (id) => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }

    const postAuthor = datas.find((item) => item.id === id)?.author;
    if (user.email !== postAuthor) {
      alert("해당 게시글을 삭제할 권한이 없습니다.");
      return;
    }

    const confirmDelete = window.confirm("삭제하겠습니까?");
    if (confirmDelete) {
      dispatch(deletePost(id));
      alert("삭제되었습니다.");
    }
  };

  //   const confirm = window.confirm("삭제하겠습니까?");
  //   if (confirm) {
  //     if (user.email === datas.find((item) => item.id === id)?.author) {
  //       dispatch(deletePost(id));
  //       alert("삭제되었습니다.");
  //     } else {
  //       alert("해당 게시글을 삭제할 권한이 없습니다.");
  //     }
  //   }
  // };

  // 나중에 다시 확인
  const handleEdit = (id) => {
    const authorEmail = datas.find((item) => item.id === id)?.author;
    if (user && user.email === authorEmail) {
      navigate(`/edit/${id}`);
    } else {
      alert("해당 게시글을 수정할 권한이 없습니다.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={handleAdd}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {/*
        useState로 만들어 배열을 map함수로 뿌려줌
        item으로 매개변수 지정
        */}
        {datas.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "#EEEEEE",
              height: "100px",
              borderRadius: "24px",
              marginBottom: "12px",
              display: "flex",
              padding: "12px 16px 12px 16px",
            }}
          >
            <div
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              style={{
                flex: 4,
                borderRight: "1px solid lightgrey",
                cursor: "pointer",
              }}
            >
              <h2 key={item}>{item.title}</h2>
              <p
                style={{
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.content}
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "space-around",
                gap: "12px",
              }}
            >
              <div>{item.author}</div>
              <div>
                <button
                  onClick={() => {
                    handleEdit(item.id);
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
                  onClick={() => {
                    handleDelete(item.id);
                  }}
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
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
