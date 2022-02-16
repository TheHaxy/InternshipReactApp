import React, {useEffect, useMemo} from "react";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.scss";
import preloader from "../../assets/Pulse-1s-200px.svg"
import {useDispatch, useSelector} from "react-redux";
import {asyncGetAllArticlesAction} from "../../store/action";
import Cookies from "js-cookie";

const MainPage = () => {
  const dispatch = useDispatch()
  const allArticles = useSelector((state) => state.getAllArticlesReducer)
  const popularArticle = useMemo(
      () =>
          allArticles.length && allArticles.reduce((prev, curr) => {
            if (prev?.views > curr?.views) return prev;
            else return curr;
          }),
      [allArticles]
  );

  useEffect( () => {
    window.scrollTo(0, 0)
    !allArticles.length && dispatch(asyncGetAllArticlesAction())
  }, [Cookies.get("TOKEN")])

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
