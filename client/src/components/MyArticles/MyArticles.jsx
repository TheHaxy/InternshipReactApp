import React, {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

import MyArticleClasses from "./MyArticles.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import ArticleList from "../ArticleList/ArticleList";
import Cookies from "js-cookie";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetMyArticlesAction} from "../../store/action";

const MyArticles = () => {
  const dispatch = useDispatch()
  const myArticles = useSelector((state) => state.getMyArticlesReducer)
  const [user, setUser] = useState(useSelector((state) => state.getProfileReducer))
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("TOKEN")) navigate("/login", { replace: true });
    else {
      window.scrollTo(0, 0)
      dispatch(asyncGetMyArticlesAction())
    }
  }, [Cookies.get("TOKEN")]);

  return (
    <>
      <Header />
      {Cookies.get("TOKEN") && (
        <main className={MyArticleClasses[`article__container`]}>
          <ProfileCard
            className={MyArticleClasses[`profile__card`]}
            location="my_articles"
            user={user}
          />
          {myArticles.length ? (
            <ArticleList
              className={MyArticleClasses[`article__list`]}
              location="my_articles"
              myArticles={myArticles}
            />
          ) : (
            <section className={MyArticleClasses[`not__found__section`]}>
              <h1 className={MyArticleClasses[`articles__undefined`]}>
                Articles not found...
              </h1>
            </section>
          )}
        </main>
      )}
      <Footer />
    </>
  );
};

export default MyArticles;
