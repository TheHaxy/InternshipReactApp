import React, {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import MyArticleClasses from "./MyArticles.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import ArticleList from "../ArticleList/ArticleList";

const MyArticles = () => {
  const [myArticles, setMyArticles] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("USER_DATA")))
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.USER_TOKEN) navigate("/login", { replace: true });
  }, [localStorage.USER_TOKEN]);

  useEffect(async () => {
    await axios.get("http://localhost:5000/api/my-articles", {
      headers: {'Authorization': localStorage.USER_TOKEN}
    }).then(res => setMyArticles(res.data))
  }, [])

  return (
    <>
      <Header />
      {localStorage.USER_TOKEN && (
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
