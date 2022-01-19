import React from "react";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.css";

const MainPage = () => {
  const articlesStorage = JSON.parse(localStorage.getItem("ARTICLES_STORAGE"));

    const popularArticle = () => articlesStorage.reduce((prev, curr) => {
      if (prev.views > curr.views) return prev;
      else return curr;
    });
  return (
    <>
      <Header />
      <main className={mainClasses.main}>
        {localStorage.ARTICLES_STORAGE ?
          <>
        <Article location="main_page" article={popularArticle()} />
        <ArticleList location="article_list" />
          </>
          : <h1 className={mainClasses[`articles__undefined`]}>Articles not found...</h1>
      }
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
