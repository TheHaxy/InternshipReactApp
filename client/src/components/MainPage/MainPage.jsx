import React, {useEffect, useMemo} from "react";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.scss";

const MainPage = () => {
  const articlesData = fetch("http://localhost:5000/api/main-page", {
    method: "GET",
    headers: {'Content-Type': 'application/json;charset=utf-8'}
  })
  articlesData.then(res => res.json()).then(res => localStorage.setItem("ARTICLE_STORAGE", JSON.stringify(res)))

  const popularArticle = useMemo(
       () =>
        JSON.parse(localStorage.ARTICLE_STORAGE).reduce((prev, curr) => {
          if (prev?.views > curr?.views) return prev;
          else return curr;
        }),
      [localStorage.ARTICLE_STORAGE]
  );

  return (
      <>
        <Header/>
        <main className={mainClasses.main}>
          {localStorage.ARTICLE_STORAGE ? (
              <>
                <Article location="main_page" article={popularArticle}/>
                <ArticleList location="article_list"/>
              </>
          ) : (
              <h1 className={mainClasses["main__articles-undefined"]}>
                Articles not found...
              </h1>
          )}
        </main>
        <Footer/>
      </>
  );
};

export default MainPage;
