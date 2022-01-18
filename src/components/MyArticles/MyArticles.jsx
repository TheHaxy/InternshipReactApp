import React from "react";

import MyArticleClasses from './MyArticles.module.css'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import ArticleList from "../ArticleList/ArticleList";


const MyArticles = () => {
  const user = JSON.parse(localStorage.getItem("LOGIN_USER"));
  return (
    <>
      <Header />
    <div className={MyArticleClasses[`article__container`]}>
      <section className={MyArticleClasses[`article__content`]}>
      <ProfileCard className={MyArticleClasses[`profile__card`]} userImage={user.image} user={user} location="my_articles"/>
      <ArticleList className={MyArticleClasses[`article__list`]} location="my_articles"/>
      </section>
    </div>
      <Footer />
    </>
  );
};

export default MyArticles;