import React, {useCallback, useEffect, useMemo, useState} from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";
import {APP_ARTICLES_PAGE} from "../../mockdata/appConstants";

import articleListClasses from "./ArticleList.module.css";

const ArticleList = ({location}) => {
  const [count, setCount] = useState(0);

  const onClickNextButton = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  const onClickPrevButton = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);

  if (location === "my_articles") {
    const articlesData = fetch("http://localhost:5000/api/my-articles", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.USER_TOKEN
      }
    })
    articlesData.then(res => res.json()).then(res => localStorage.setItem("MY_ARTICLES", JSON.stringify(res)))
  } else {
    const articlesData = fetch("http://localhost:5000/api/main-page", {
      method: "GET",
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    articlesData.then(res => res.json()).then(res => localStorage.setItem("ARTICLE_STORAGE", JSON.stringify(res)))
  }

  const articles = useMemo(() => {
    if (location === "my_articles" && localStorage.USER_TOKEN) {
      return JSON.parse(localStorage.getItem("MY_ARTICLES"))?.reverse()
    } else {
      return JSON.parse(localStorage.getItem("ARTICLE_STORAGE"))?.reverse()
    }
  }, [location, localStorage.ARTICLE_STORAGE]);

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
                    key={myArticle?._id}
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
