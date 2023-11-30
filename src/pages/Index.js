import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>
        <h2 style={{ fontWeight: 800, color: "purple" }}>My Diary</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫화면</h2>
      </Main>
      <Footer>
        <p>Copyright 2023. 다이어리</p>
      </Footer>
    </>
  );
};

export default Index;
