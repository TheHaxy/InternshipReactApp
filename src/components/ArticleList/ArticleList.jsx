import React, { useCallback, useEffect, useMemo, useState } from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";
import { APP_ARTICLES_PAGE } from "../../mockdata/appConstants";

import articleListClasses from "./ArticleList.module.css";

const ArticleList = ({ location }) => {
  const [count, setCount] = useState(0);
  const articlesStorage = useMemo(
    () => JSON.parse(localStorage.getItem("ARTICLES_STORAGE"))?.reverse(),
    [(count, localStorage.ARTICLES_STORAGE, APP_ARTICLES_PAGE)]
  );

  const onClickNextButton = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  const onClickPrevButton = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);

  const articles = useMemo(() => {
    if (location === "my_articles" && localStorage.LOGIN_USER) {
      return articlesStorage?.filter((article) => {
        return article.email === JSON.parse(localStorage.LOGIN_USER).email;
      });
    } else if (localStorage.LOGIN_USER) {
      return articlesStorage;
    }
  }, [articlesStorage, location, localStorage.LOGIN_USER]);

  const slicedArticles = useMemo(
    () =>
      articles?.slice(
        count * APP_ARTICLES_PAGE,
        (count + 1) * APP_ARTICLES_PAGE
      ),
    [articles, count]
  );

  const isDisable = useCallback(
    (arrayArticles) =>
      (count === 0 && arrayArticles?.length < 7) ||
      (count + 1) * APP_ARTICLES_PAGE >= arrayArticles?.length,
    [count, APP_ARTICLES_PAGE]
  );

  return (
    <section className={articleListClasses[`${location}__article__list`]}>
      {location === "article_list" && (
        <h1 className={articleListClasses[`article__list__title`]}>
          Popular articles
        </h1>
      )}
      <div>
        {slicedArticles?.map((myArticle) => {
          return (
            <Article
              location={location}
              article={myArticle}
              key={myArticle?.id}
            />
          );
        })}
      </div>
      <div className={articleListClasses[`article__list__nav__button`]}>
        <Button
          variant={`outlined__header`}
          name="Prev"
          onClick={onClickPrevButton}
          isDisable={!(count * APP_ARTICLES_PAGE >= APP_ARTICLES_PAGE)}
        />
        <Button
          variant={`outlined__header`}
          name="Next"
          onClick={onClickNextButton}
          isDisable={isDisable(articles)}
        />
      </div>
    </section>
  );
};

export default ArticleList;
