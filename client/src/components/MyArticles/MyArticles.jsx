import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import MyArticleClasses from "./MyArticles.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import ArticleList from "../ArticleList/ArticleList";

const MyArticles = () => {
  const user = JSON.parse(localStorage.getItem("LOGIN_USER"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.LOGIN_USER) navigate("/login", { replace: true });
  }, [localStorage.LOGIN_USER]);

  return (
    <>
      <Header />
      {localStorage.LOGIN_USER && (
        <main className={MyArticleClasses[`article__container`]}>
          <ProfileCard
            className={MyArticleClasses[`profile__card`]}
            userImage={JSON.parse(user.image)}
            user={user}
            location="my_articles"
          />
          {localStorage.ARTICLES_STORAGE ? (
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
