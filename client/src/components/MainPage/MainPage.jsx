import React, {useEffect, useMemo, useState} from "react";

import axios from "axios";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.scss";
import preloader from "../../assets/Pulse-1s-200px.svg"

const MainPage = () => {
  const [allArticles, setAllArticles] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const popularArticle = useMemo(
      () =>
          allArticles.length && allArticles.reduce((prev, curr) => {
            if (prev?.views > curr?.views) return prev;
            else return curr;
          }),
      [allArticles]
  );

  useEffect(async () => {
    window.scrollTo(0, 0)
    await axios.get("http://localhost:5000/api/main-page", {
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(res => setAllArticles(res.data))
    setIsLoaded(true)
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
              <img src={preloader} alt="Loading..."/>
          )}
        </main>
        <Footer/>
      </>
  );
};

export default MainPage;
