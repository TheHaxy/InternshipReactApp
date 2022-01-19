import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import Button from "../UI/Button/Button";
import Article from "../Article/Article";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ArticlePageClasses from "./ArticlePage.module.css";

const articlesStorage = JSON.parse(localStorage.getItem("ARTICLES_STORAGE"));

const ArticlePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const thisArticle = articlesStorage.find(
    (el) => `#${el.id}` === location.hash
  );

  const openAllArticles = () => {
    navigate("/main-page", { replace: true });
  };
  return (
    <>
      <Header />
      <main className={ArticlePageClasses[`article__page`]}>
        <aside>
          <Button
            variant={`outlined__header`}
            name="All Articles"
            onClick={() => openAllArticles()}
          />
        </aside>
        <Article article={thisArticle} location="article_page" />
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
