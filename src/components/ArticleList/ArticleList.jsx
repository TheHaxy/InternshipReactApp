import React, { useCallback, useState } from "react";

import Article from "../Article/Article";
import Button from "../UI/Button/Button";

import articles from "../../mockdata/articleData";

import articleListClasses from "./ArticleList.module.css";

const ArticleList = () => {
  const ArticlesInPage = 6;
  const [count, setCount] = useState(0);

  const onclickNextButton = useCallback(() => {
    setCount(count + 1);
    ArticleList();
  }, [count]);

  const onclickPrevButton = useCallback(() => {
    setCount(count - 1);
    ArticleList();
  }, [count]);

  return (
    <section className={articleListClasses[`article__list`]}>
      <h1 className={articleListClasses[`article__list__title`]}>
        Popular articles
      </h1>
      <div>
        {articles
          .slice(count * ArticlesInPage, (count + 1) * ArticlesInPage)
          .map((article) => {
            return (
              <Article
                title={article.title}
                subtitle={article.subtitle}
                author={article.author}
                image={article.img}
                date={article.date}
                views={article.views}
                location={`article_list`}
                key={Math.random()}
              />
            );
          })}
      </div>
      <div className={articleListClasses[`article__list__nav__button`]}>
        <Button
          variant={`outlined__header`}
          name="Prev"
          onClick={onclickPrevButton}
          isDisable={!(count * ArticlesInPage >= ArticlesInPage)}
        />
        <Button
          variant={`outlined__header`}
          name="Next"
          onClick={onclickNextButton}
          isDisable={count * ArticlesInPage >= articles.length - 1}
        />
      </div>
    </section>
  );
};

export default ArticleList;
