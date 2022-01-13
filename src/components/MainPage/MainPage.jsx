import React from "react";
import mainClasses from "./MainPage.module.css";
import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={mainClasses.main}>
        <Article location="main_page" />
        <ArticleList />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
