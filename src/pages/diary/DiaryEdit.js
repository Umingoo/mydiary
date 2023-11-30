import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);

  return (
    <>
      <Header>
        <h2 style={{ fontWeight: 800, color: "purple" }}>Diary Edit</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리</p>
      </Footer>
    </>
  );
};

export default DiaryEdit;
