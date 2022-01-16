import React from "react";

import authorImg from "../../assets/image 14.svg";
import eyeIcon from "../../assets/Vector.svg";

import articleClasses from "./Article.module.css";

const Article = ({ location, title, subtitle, image, author, date, views }) => {
  return (
    <div className={articleClasses[`article__${location}`]}>
      <img
        className={articleClasses[`article__img__${location}`]}
        src={image}
        alt={`Article image`}
      />
      <section className={articleClasses[`article__info__${location}`]}>
        <p className={articleClasses[`article__tag`]}>#Typography</p>
        <h1 className={articleClasses[`article__title`]}>{title}</h1>
        <p className={articleClasses[`article__subtitle__${location}`]}>
          {subtitle}
        </p>
        <div className={articleClasses[`article__other__info`]}>
          <div className={articleClasses.author}>
            <img
              className={articleClasses[`author__img`]}
              src={authorImg}
              alt="author"
            />
            <p className={articleClasses[`author__name`]}>{author}</p>
          </div>
          <p className={articleClasses.time}>{date}</p>
          <div className={articleClasses.views}>
            <img src={eyeIcon} alt="eye__icon" />
            <p>{views}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
