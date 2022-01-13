import React, { useCallback, useState } from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";

import articles from "../../mockdata/articleData";

import { APP_ARTICLES_PAGE } from '../../appConstants'

import articleListClasses from "./ArticleList.module.css";

const ArticleList = () => {
  const [count, setCount] = useState(0);

  const onClickNextButton = useCallback(() => {
    setCount(count  => count + 1);
  }, []);

  const onClickPrevButton = useCallback(() => {
    setCount(count => count - 1);
  }, []);

  return (
    <section className={articleListClasses[`article__list`]}>
      <h1 className={articleListClasses[`article__list__title`]}>
        Popular articles
      </h1>
      <div>
        {articles
          .slice(count * APP_ARTICLES_PAGE, (count + 1) * APP_ARTICLES_PAGE)
          .map((article, index) => {
            return (
              <Article
                title={article.title}
                subtitle={article.subtitle}
                author={article.author}
                image={article.img}
                date={article.date}
                views={article.views}
                location={`article_list`}
                key={index}
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
          isDisable={count * APP_ARTICLES_PAGE >= articles.length - 1}
        />
      </div>
    </section>
  );
};

export default ArticleList;
