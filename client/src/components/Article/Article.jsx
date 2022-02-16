import React, {useState} from "react";

import {useNavigate} from "react-router-dom";
import draftToHtml from 'draftjs-to-html'

import eyeIcon from "../../assets/Vector.svg";
import articleClasses from "./Article.module.css";
import imageNotFound from "../../assets/notImage.png"
import {useDispatch} from "react-redux";
import {asyncOpenArticleAction} from "../../store/action";

const Article = ({location, article}) => {
  const [articleViews, setArticleViews] = useState(article.views);
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const articleOnClick = async () => {
    dispatch(asyncOpenArticleAction(article))
    navigate(`/article-page#${article._id}`, {replace: true});
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
                  src={JSON.parse(article.image) || imageNotFound}
                  alt="Article img"
              />
              <section className={articleClasses[`${location}__article__info`]}>
                <p
                    className={articleClasses[`article__tag`]}
                >{`#${article.category}`}</p>
                <h1 className={articleClasses[`article__title`]}>
                  {article.title}
                </h1>
                <p
                    className={articleClasses[`${location}__article__subtitle`]}
                    dangerouslySetInnerHTML={{__html: draftToHtml(article.text)}}>
                </p>
                <div className={articleClasses[`article__other__info`]}>
                  <div className={articleClasses.author}>
                    <img
                        className={articleClasses[`author__img`]}
                        src={article.authorImage}
                        alt="author"
                    />
                    <p className={articleClasses[`author__name`]}>
                      {article.authorName}
                    </p>
                  </div>
                  <p className={articleClasses.time}>{article.date}</p>
                  <div className={articleClasses.views}>
                    <img src={eyeIcon} alt="eye__icon"/>
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
                    src={article.image && JSON.parse(article.image) || imageNotFound}
                    alt="Article img"
                />
                <p
                    className={articleClasses[`${location}__article__subtitle`]}
                    dangerouslySetInnerHTML={{__html: draftToHtml(article.text)}}>
                </p>
                <div className={articleClasses[`article__other__info`]}>
                  <div className={articleClasses.author}>
                    <img
                        className={articleClasses[`author__img`]}
                        src={article.authorImage}
                        alt="author"
                    />
                    <p className={articleClasses[`author__name`]}>
                      {article.authorName}
                    </p>
                  </div>
                  <p className={articleClasses.time}>{article.date}</p>
                  <div className={articleClasses.views}>
                    <img src={eyeIcon} alt="eye__icon"/>
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
