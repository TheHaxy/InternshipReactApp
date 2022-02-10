import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import MyArticleClasses from "./MyArticles.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import ArticleList from "../ArticleList/ArticleList";

const MyArticles = () => {
  const user = JSON.parse(localStorage.getItem("USER_DATA"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.USER_TOKEN) navigate("/login", { replace: true });
  }, [localStorage.USER_TOKEN]);

  return (
    <>
      <Header />
      {localStorage.USER_TOKEN && (
        <main className={MyArticleClasses[`article__container`]}>
          <ProfileCard
            className={MyArticleClasses[`profile__card`]}
            user={user}
            location="my_articles"
          />
          {localStorage.ARTICLE_STORAGE ? (
            <ArticleList
              className={MyArticleClasses[`article__list`]}
              location="my_articles"
            />
          ) : (
            <section className={MyArticleClasses[`not__found__section`]}>
              <h1 className={MyArticleClasses[`articles__undefined`]}>
                Articles not found...
              </h1>
              \
            </section>
          )}
        </main>
      )}
      <Footer />
    </>
  );
};

export default MyArticles;
