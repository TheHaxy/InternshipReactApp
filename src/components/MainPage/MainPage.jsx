import React, { useMemo } from "react";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.css";

const articlesStorage = JSON.parse(localStorage.getItem("ARTICLES_STORAGE"));

const MainPage = () => {
  const popularArticle = articlesStorage.reduce((prev, curr) => {
    if (prev.views > curr.views) return prev;
    else return curr;
  });
  return (
    <>
      <Header />
      <main className={mainClasses.main}>
        <Article location="main_page" article={popularArticle} />
        <ArticleList location="article_list" />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
