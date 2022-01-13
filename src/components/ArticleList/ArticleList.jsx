import React, { useState } from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";

import articles from "../../mockdata/articleData";

import articleListClasses from "./ArticleList.module.css";

const ArticleList = () => {
  const ArticlesInPage = 6;
  let prevStateDisable = true;
  let nextStateDisable = false;
  const [articlePage, setArticlePage] = useState(ArticlesInPage);

  if (articlePage > ArticlesInPage) prevStateDisable = false;
  if (articlePage >= articles.length) nextStateDisable = true;

  const onclickNextButton = () => {
    setArticlePage(articlePage + ArticlesInPage);
    ArticleList();
  };

  const onclickPrevButton = () => {
    setArticlePage(articlePage - ArticlesInPage);
    ArticleList();
  };

  return (
    <section className={articleListClasses[`article__list`]}>
      <h1 className={articleListClasses[`article__list__title`]}>
        Popular articles
      </h1>
      <div>
        {articles.map((article) => {
          if (
            article.id <= articlePage &&
            article.id > articlePage - ArticlesInPage
          ) {
            return (
              <Article
                title={article.title}
                subtitle={article.subtitle}
                author={article.author}
                image={article.img}
                date={article.date}
                views={article.views}
                location={`article_list`}
              />
            );
          }
        })}
      </div>
      <div className={articleListClasses[`article__list__nav__button`]}>
        <Button
          variant={`outlined__header`}
          name="Prev"
          onClick={onclickPrevButton}
          isDisable={prevStateDisable}
        />
        <Button
          variant={`outlined__header`}
          name="Next"
          onClick={onclickNextButton}
          isDisable={nextStateDisable}
        />
      </div>
    </section>
  );
};

export default ArticleList;
