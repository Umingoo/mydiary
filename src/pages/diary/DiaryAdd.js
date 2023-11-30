import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>
        <h2 style={{ fontWeight: 800, color: "purple" }}>Diary Add</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리</p>
      </Footer>
    </>
  );
};

export default DiaryAdd;
