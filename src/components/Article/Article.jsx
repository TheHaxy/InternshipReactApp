import React from 'react';

import articleImg1 from '../../assets/ArticleImage1.jpg'
import articleImg2 from '../../assets/ArticleImage2.jpg'
import articleImg3 from '../../assets/ArticleImage3.jpg'
import articleImg4 from '../../assets/ArticleImage4.jpg'
import articleImg5 from '../../assets/ArticleImage5.jpg'
import articleImg6 from '../../assets/ArticleImage6.jpg'
import articleImg7 from '../../assets/ArticleImage7.jpg'

import authorImg from '../../assets/image 14.svg'
import eyeIcon from '../../assets/Vector.svg'

import articleClasses from './Article.module.css';

const Article = ({location}) => {
    return (
        <div className={articleClasses[`article__${location}`]}>
            <img className={articleClasses[`article__img__${location}`]} src={articleImg3} alt={`Article image`}/>
            <section className={articleClasses[`article__info`]}>
                <p className={articleClasses[`article__tag`]}>#Typography</p>
                <h1 className={articleClasses[`article__title`]}>Humane Typography in the Digital Age</h1>
                <p className={articleClasses[`article__subtitle__${location}`]}>Human beings aren’t perfect. Perfection is something
                    that will always elude us.
                    There will always be a small part of humanity in everything we do. No matter ho
                    w small that part, we should make sure that it transcends the limits of the med
                    ium. We have to think about the message first. What typeface should we use and
                    why? Does the typeface match the message and what?</p>
                <div className={articleClasses[`article__other__info`]}>
                    <div className={articleClasses.author}>
                        <img className={articleClasses[`author__img`]} src={authorImg} alt="author"/>
                        <p className={articleClasses[`author__name`]}>Janay Wright</p>
                    </div>
                    <p className={articleClasses.time}>Jun 13 · 5 min read</p>
                    <div className={articleClasses.views}>
                        <img src={eyeIcon} alt="eye__icon"/>
                        <p>1690</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Article;