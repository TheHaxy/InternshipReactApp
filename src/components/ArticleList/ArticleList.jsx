import React, { useCallback, useMemo, useState } from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";
import { APP_ARTICLES_PAGE } from "../../mockdata/appConstants";

import articleListClasses from "./ArticleList.module.css";

const ArticleList = ({ location }) => {
  const [count, setCount] = useState(0);
  const [articlesStorage, setArticlesStorage] = useState(
    JSON.parse(localStorage.getItem("ARTICLES_STORAGE"))
  );

  const onClickNextButton = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const onClickPrevButton = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const findMyArticles = useMemo(() => {
    if (location === "my_articles" && localStorage.LOGIN_USER) {
      return articlesStorage.filter((article) => {
        return article.email === JSON.parse(localStorage.LOGIN_USER).email;
      });
    }
  }, [articlesStorage, location, localStorage.LOGIN_USER]);

  return (
    <section className={articleListClasses[`${location}__article__list`]}>
      {location === "article_list" && (
        <h1 className={articleListClasses[`article__list__title`]}>
          Popular articles
        </h1>
      )}
      <div>
        {location === "my_articles" && localStorage.LOGIN_USER
          ? findMyArticles
              .reverse()
              .slice(count * APP_ARTICLES_PAGE, (count + 1) * APP_ARTICLES_PAGE)
              .map((myArticle) => {
                return <Article location={location} article={myArticle} />;
              })
          : articlesStorage
              .reverse()
              .slice(count * APP_ARTICLES_PAGE, (count + 1) * APP_ARTICLES_PAGE)
              .map((article) => {
                return <Article article={article} location={location} />;
              })}
      </div>
      <div className={articleListClasses[`article__list__nav__button`]}>
        <Button
          variant={`outlined__header`}
          name="Prev"
          onClick={onClickPrevButton}
          isDisable={!(count * APP_ARTICLES_PAGE >= APP_ARTICLES_PAGE)}
        />
        {location === "my_articles" ? (
          <Button
            variant={`outlined__header`}
            name="Next"
            onClick={onClickNextButton}
            isDisable={
              (count === 0 && findMyArticles?.length < 7) ||
              count * APP_ARTICLES_PAGE >= findMyArticles?.length - 1
            }
          />
        ) : (
          <Button
            variant={`outlined__header`}
            name="Next"
            onClick={onClickNextButton}
            isDisable={
              (count === 0 && articlesStorage.length < 7) ||
              count * APP_ARTICLES_PAGE >= articlesStorage.length - 1
            }
          />
        )}
      </div>
    </section>
  );
};

export default ArticleList;
