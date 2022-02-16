import React, {useEffect} from "react";

import {useNavigate} from "react-router-dom";

import Button from "../UI/Button/Button";
import Article from "../Article/Article";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ArticlePageClasses from "./ArticlePage.module.css";
import {useSelector} from "react-redux";

const ArticlePage = () => {
  const thisArticle = useSelector((state) => state.openArticleReducer)
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0), [])

  const openAllArticles = () => {
    navigate("/main-page", {replace: true});
  };

  return (
      <>
        <Header/>
        <main className={ArticlePageClasses[`article__page`]}>
              <aside>
                <Button
                    variant={`outlined__header`}
                    name="All Articles"
                    onClick={() => openAllArticles()}
                />
              </aside>
              <Article article={thisArticle} location="article_page"/>
        </main>
        <Footer/>
      </>
  );
};

export default ArticlePage;
