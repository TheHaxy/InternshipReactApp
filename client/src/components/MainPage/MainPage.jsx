import React, {useEffect, useMemo, useState} from "react";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.scss";
import axios from "axios";

const MainPage = () => {
  const [allArticles, setAllArticles] = useState([])
  const popularArticle = useMemo(
      () =>
          allArticles.length && allArticles.reduce((prev, curr) => {
            if (prev?.views > curr?.views) return prev;
            else return curr;
          }),
      [allArticles]
  );

  useEffect(async () => {
    await axios.get("http://localhost:5000/api/main-page", {
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(res => setAllArticles(res.data))
  }, [])

  return (
      <>
        <Header/>
        <main className={mainClasses.main}>
          {allArticles.length ? (
              <>
                <Article location="main_page" article={popularArticle}/>
                <ArticleList location="article_list" allArticles={allArticles}/>
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
