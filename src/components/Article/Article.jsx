import React from "react";

import { useNavigate } from "react-router-dom";

import authorImg from "../../assets/image 14.svg";
import eyeIcon from "../../assets/Vector.svg";
import articleClasses from "./Article.module.css";

const Article = ({ location, article }) => {
  const navigate = useNavigate();

  const articleOnClick = () => {
    article.views = article.views + 1;
    navigate(`/article-page#${article.id}`, { replace: true });
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
            src={article.image}
            alt={`Article image`}
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
                  src={authorImg}
                  alt="author"
                />
                <p className={articleClasses[`author__name`]}>
                  {article.author}
                </p>
              </div>
              <p className={articleClasses.time}>{article.date}</p>
              <div className={articleClasses.views}>
                <img src={eyeIcon} alt="eye__icon" />
                <p>{article.views}</p>
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
              src={article.image}
              alt={`Article image`}
            />
            <p className={articleClasses[`${location}__article__subtitle`]}>
              {article.text}
            </p>
            <div className={articleClasses[`article__other__info`]}>
              <div className={articleClasses.author}>
                <img
                  className={articleClasses[`author__img`]}
                  src={authorImg}
                  alt="author"
                />
                <p className={articleClasses[`author__name`]}>
                  {article.author}
                </p>
              </div>
              <p className={articleClasses.time}>{article.date}</p>
              <div className={articleClasses.views}>
                <img src={eyeIcon} alt="eye__icon" />
                <p>{article.views}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Article;
