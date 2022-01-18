import React, { useMemo } from "react";

import articles from "../../mockdata/articleData";

import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainClasses from "./MainPage.module.css";

const MainPage = () => {
  const popularArticle = useMemo(() => {
    return articles.reduce((prev, curr) => {
      if (prev.views > curr.views) return prev;
      else return curr;
    });
  }, [articles]);
  return (
    <>
      <Header />
      <main className={mainClasses.main}>
        <Article
          location="main_page"
          title={popularArticle.title}
          subtitle={popularArticle.subtitle}
          image={popularArticle.img}
          author={popularArticle.author}
          views={popularArticle.views}
          date={popularArticle.date}
        />
        <ArticleList location="article_list" />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
