import React from 'react';
import articleListClasses from './ArticleList.module.css'
import Article from "../Article/Article";
import Button from "../UI/Button/Button";

const ArticleList = () => {
    return (
        <section className={articleListClasses[`article__list`]}>
            <h1 className={articleListClasses[`article__list__title`]}>Popular articles</h1>
            <div>
                <Article location='article_list'/>
                <Article location='article_list'/>
                <Article location='article_list'/>
                <Article location='article_list'/>
                <Article location='article_list'/>
                <Article location='article_list'/>
            </div>
            <div className={articleListClasses[`article__list__nav__button`]}>
                <Button variant='outlined__header' name='Prev'/>
                <Button variant='outlined__header' name='Next'/>
            </div>
        </section>
    );
};

export default ArticleList;