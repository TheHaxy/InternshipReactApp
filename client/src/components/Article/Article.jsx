import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import eyeIcon from "../../assets/Vector.svg";
import articleClasses from "./Article.module.css";

const Article = ({ location, article }) => {
  const [articlesStorage, setArticlesStorage] = useState(JSON.parse(localStorage.getItem("ARTICLE_STORAGE")));
  const [articleViews, setArticleViews] = useState(article.views);
  const navigate = useNavigate();

  const articleOnClick = () => {
    fetch("http://localhost:5000/api/article-onclick", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.USER_TOKEN
      },
      body: {
        views: articleViews + 1
      }
    })
    navigate(`/article-page#${article._id}`, { replace: true });
  };
  return (
    <>
      {location !== "article_page" ? (
        <div
          className={articleClasses[`${location}__article`]}
          onClick={() => articleOnClick()}
        >
          <img
            className={articleClasses[`${location}__article__img`]}
            src={JSON.parse(article.image) || ""}
            alt="Article img"
          />
          <section className={articleClasses[`${location}__article__info`]}>
            <p
              className={articleClasses[`article__tag`]}
            >{`#${article.category}`}</p>
            <h1 className={articleClasses[`article__title`]}>
              {article.title}
            </h1>
            <p className={articleClasses[`${location}__article__subtitle`]}>
              {article.text}
            </p>
            <div className={articleClasses[`article__other__info`]}>
              <div className={articleClasses.author}>
                <img
                  className={articleClasses[`author__img`]}
                  src={article.authorImage}
                  alt="author"
                />
                <p className={articleClasses[`author__name`]}>
                  {article.author}
                </p>
              </div>
              <p className={articleClasses.time}>{article.date}</p>
              <div className={articleClasses.views}>
                <img src={eyeIcon} alt="eye__icon" />
                <p>{articleViews}</p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className={articleClasses[`${location}__article`]}>
          <section className={articleClasses[`${location}__article__info`]}>
            <p
              className={articleClasses[`article__tag`]}
            >{`#${article.category}`}</p>
            <h1 className={articleClasses[`${location}__article__title`]}>
              {article.title}
            </h1>
            <img
              className={articleClasses[`${location}__article__img`]}
              src={JSON.parse(article.image) || ""}
              alt="Article img"
            />
            <p className={articleClasses[`${location}__article__subtitle`]}>
              {article.text}
            </p>
            <div className={articleClasses[`article__other__info`]}>
              <div className={articleClasses.author}>
                <img
                  className={articleClasses[`author__img`]}
                  src={article.authorImage}
                  alt="author"
                />
                <p className={articleClasses[`author__name`]}>
                  {article.author}
                </p>
              </div>
              <p className={articleClasses.time}>{article.date}</p>
              <div className={articleClasses.views}>
                <img src={eyeIcon} alt="eye__icon" />
                <p>{articleViews}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Article;
